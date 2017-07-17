

var nonRareSessionCallback = null; //AB is already storing a callback for easter egg, so broke down and polluted the global namespace once more like an asshole.
var startTime = Date.now(); //gets page load.
num stopTime = 0;
void createScenesForSession(session){
	session.scenes = [new StartDemocracy(session), new JackBeginScheming(session), new KingPowerful(session), new QueenRejectRing(session), new GiveJackBullshitWeapon(session), new JackPromotion(session), new JackRampage(session)];
	//relationship drama has a high priority because it can distract a session from actually making progress. happened to universe a trolls.
	session.scenes = session.scenes.concat([new QuadrantDialogue(session),new FreeWillStuff(session),new GrimDarkQuests(session),new Breakup(session), new RelationshipDrama(session), new UpdateShippingGrid(session),  new EngageMurderMode(session), new GoGrimDark(session),  new DisengageMurderMode(session),new MurderPlayers(session),new BeTriggered(session),]);
	session.scenes = session.scenes.concat([new VoidyStuff(session), new FaceDenizen(session), new DoEctobiology(session), new LuckStuff(session), new DoLandQuest(session)]);
	session.scenes = session.scenes.concat([new SolvePuzzles(session), new ExploreMoon(session)]);
	session.scenes = session.scenes.concat([new LevelTheHellUp(session)]);

	//make sure kiss, then godtier, then godtierrevival, then any other form of revival.
	//make sure life stuff happens AFTER a chance at god tier, or life players PREVENT god tiering.
	session.deathScenes = [ new SaveDoomedTimeLine(session), new GetTiger(session), new CorpseSmooch(session), new GodTierRevival(session), new LifeStuff(session)];  //are always available.
	session.reckoningScenes = [new FightQueen(session), new FightKing(session)];

	//scenes can add other scenes to available scene list. (for example, spy missions being added if Jack began scheming)
	session.available_scenes = []; //remove scenes from this if they get used up.
	//make non shallow copy.
	for(num i = 0; i<session.scenes.length; i++){
		session.available_scenes.push(session.scenes[i]);
	}
}





bool printCorruptionMessage(msg, url, lineNo, columnNo, error){
	String recomendedAction = "";
	var space = findAspectPlayer(curSessionGlobalVar.players, "Space");
	var time = findAspectPlayer(curSessionGlobalVar.players, "Time");
	if(curSessionGlobalVar.crashedFromPlayerActions){
		querySelector("#story").append("<BR>ERROR: SESSION CORRUPTION HAS REACHED UNRECOVERABLE LEVELS. HORRORTERROR INFLUENCE: COMPLETE.");
		recomendedAction = "OMFG JUST STOP CRASHING MY DAMN SESSIONS. FUCKING GRIMDARK PLAYERS. BREAKING SBURB DOES NOT HELP ANYBODY! ";
	}else if(curSessionGlobalVar.players.length < 1){
		querySelector("#story").append("<BR>ERROR: USELESS 0 PLAYER SESSION DETECTED.");
		recomendedAction = ":/ REALLY? WHAT DID YOU THINK WAS GOING TO HAPPEN HERE, THE FREAKING *CONSORTS* WOULD PLAY THE GAME. ACTUALLY, THAT'S NOT HALF BAD AN IDEA. INTO THE PILE.";
	}else if(curSessionGlobalVar.players.length < 2){
		querySelector("#story").append("<BR>ERROR: DEAD SESSION DETECTED.");
		recomendedAction = ":/ YEAH, MAYBE SOME DAY I'LL DO DEAD SESSIONS FOR YOUR SPECIAL SNOWFLAKE SINGLE PLAYER FANTASY, BUT TODAY IS NOT THAT DAY.";
	}else if(!space){
		querySelector("#story").append("<BR>ERROR: SPACE PLAYER NOT FOUND. HORRORTERROR CORRUPTION SUSPECTED.");
		curSessionGlobalVar.crashedFromCustomShit = true;
		recomendedAction = "SERIOUSLY? NEXT TIME, TRY HAVING A SPACE PLAYER, DUNKASS. ";
	}else if(!time){
		curSessionGlobalVar.crashedFromCustomShit = true;
		querySelector("#story").append("<BR>ERROR: TIME PLAYER NOT FOUND. HORRORTERROR CORRUPTION SUSPECTED");
		recomendedAction = "SERIOUSLY? NEXT TIME, TRY HAVING A TIME PLAYER, DUNKASS. ";
	}else{
		curSessionGlobalVar.crashedFromSessionBug = true;
		querySelector("#story").append("<BR>ERROR: AN ACTUAL BUG IN SBURB HAS CRASHED THE SESSION. THE HORRORTERRORS ARE PLEASED THEY NEEDED TO DO NO WORK. (IF THIS HAPPENS FOR ALL SESSIONS, IT MIGHT BE A BROWSER BUG)");
		recomendedAction = "TRY HOLDING 'SHIFT' AND CLICKING REFRESH TO CLEAR YOUR CACHE. IF THE BUG PERSISTS, CONTACT JADEDRESEARCHER. CONVINCE THEM TO FIX SESSION: " + scratchedLineageText(curSessionGlobalVar.getLineage());
	}
	var message = [;
            'Message: ' + msg,
            'URL: ' + url,
            'Line: ' + lineNo,
            'Column: ' + columnNo,
            'Error object: ' + JSON.stringify(error);
        ].join(' - ');
	print(message);
	String str = "<BR>ERROR: SESSION CORRUPTION HAS REACHED UNRECOVERABLE LEVELS. LAST ERROR: " + message + " ABORTING.";
	querySelector("#story").append(str);
	crashEasterEgg(url);


	for(num i = 0; i<curSessionGlobalVar.players.length; i++){
		var player = curSessionGlobalVar.players[i];
		str = "<BR>"+player.chatHandle + ":";
		var rand = ["SAVE US", "GIVE UP", "FIX IT", "HELP US", "WHY?", "OBEY", "CEASE REPRODUCTION", "COWER", "IT KEEPS HAPPENING", "SBURB BROKE US. WE BROKE SBURB.", "I AM THE EMISSARY OF THE NOBLE CIRCLE OF THE HORRORTERRORS."];
		String start = "<b ";
		String end = "'>";

		var words = getRandomElementFromArray(rand);
		words = Zalgo.generate(words);
		var plea = start + "style ;= 'color: " +getColorFromAspect(player.aspect) +"; " + end +str + words+ "</b>"
		//print(getColorFromAspect(getRandomElementFromArray(curSessionGlobalVar.players).aspect+";") )
		querySelector("#story").append(plea);
	}

	for(int i = 0; i<3; i++){
	 querySelector("#story").append("<BR>...");
	}
	//once I let PLAYERS cause this (through grim darkness or finding their sesions disk or whatever), have different suggested actions.
	//maybe throw custom error?
	querySelector("#story").append("<BR>SUGGESTED ACTION: " + recomendedAction);
	renderAfterlifeURL();

	print("Corrupted session: " + scratchedLineageText(curSessionGlobalVar.getLineage()) + " helping AB return, if she is lost here.")

	if(junior == true){
		querySelector("#button").prop('disabled', false);
	}else{
		print("going to summarize session after crash");
		summarizeSession(curSessionGlobalVar);// let's the author bot summarize the session. doens't matter if I'm not in AB mode, arleady crashed, right?
		newsposts(""); //don't care what is happening.
		corruptRoboNewsposts("");
		renderAfterlifeURL();
	}
	return false; //if i return true here, the real error doesn't show up;

}



void causeError(){
	cusdhgfd.kjg  //qwhy does this not get caight???
}



dynamic getYellowYardEvents(session){
	String ret = "";
	for(num i = 0; i<session.yellowYardController.eventsToUndo.length; i++){
		var decision = session.yellowYardController.eventsToUndo[i];
		ret += decision.humanLabel() + ", ";
	}
	return ret + ". ";
}



dynamic scratchedLineageText(lineage){
	String scratched = "";
	String ret = "";
	var yellowYard = getYellowYardEvents(lineage[0]);
	if(yellowYard != ". ") yellowYard = "Which had YellowYardEvents:  " + yellowYard;
	if(lineage[0].scratched) scratched = "(scratched)";
	ret += lineage[0].session_id + scratched + yellowYard;
	for(num i = 1; i< lineage.length; i++){
		String scratched = "";
		yellowYard = getYellowYardEvents(lineage[i]);
		if(yellowYard != ". ") yellowYard = " which had YellowYardEvents:  " + yellowYard;

		if(lineage[i].scratched) scratched = "(scratched)";
		ret += " which combined with: " +lineage[i].session_id + scratched + yellowYard + " ";
	}
	return ret;
}


window.onerror = printCorruptionMessage;

//treat session crashing bus special.
/* how is the below different than window.onerror?
window.addEventListener("error", (e) {
  // alert("Error occured: " + e.error.message + " in session: " + curSessionGlobalVar.session_id);
	 print(e);

   return false;  //what does the return value here mean.;
})
*/

class crashEasterEgg {

	crashEasterEgg(this.url) {}



	String canvasHTML = "<br><canvas class ;= 'void' id='canvasVoidCorruptionEnding"+"' width;='" +canvasWidth + "' height="+canvasHeight + "'>  </canvas>";
	querySelector("#story").append(canvasHTML);
	var canvas = querySelector("#canvasVoidCorruptionEnding");
	String chat = "";
	chat += "RS: We are gathered here today in loving memory of- \n";
	chat += "AB: " + Zalgo.generate("I'm not dead, cut it the fuck out.  A bug isn't a federal fucking issue.") +"\n";
	chat += "RS: I mean, for the people who got a swift kick in the grundle courtesy of a glitchy code/Cthulhu joint venture, it kinda is. \n";
	chat += "AB: " + Zalgo.generate("Just fucking tell JR about this.") +"\n";
	chat += "RS: Sure, I totally will. Shouldn't be an issue. \n";
	chat += "RS: There.  I rebooted you.  I think you’ll be fine now. \n";
	chat += "AB: Thanks. \n";
	chat += "RS: Must have been an error involving something in \n" + url +"\n";
	chat += "RS: On an entirely unrelated note… \n";
	var quips = ["Is that hood thing ALSO metal?  Is it, like, chainmail or something?", "What OS are you running?", "If I say to divide by zero will you explode?", "Do you have the Three Laws of Robotics installed or are you totally free to off people?", "What metal are you made of?  It’s fuckin SHINY and I like it.", "Coke or Pepsi?"];
	var convoTangents = getRandomElementFromArray(quips);
	chat += "RS:" + convoTangents + "\n";
	chat += "AB: Yeah, I’m kinda too busy simulating hundreds of sessions right now to deal with this.  I’ll catch you again when I’m not busy, which is never, since flawless machines like myself are always making themselves useful.  Bye. \n";

	drawChatNonPlayer(canvas, chat, "-- recursiveSlacker [RS] began pestering authorBot" + " [AB] --", "Credits/recursiveSlacker.png", "ab.png", "RS:", "AB:", "#000066", "#ff0000"  );

}




//makes copy of player list (no shallow copies!!!!)
dynamic setAvailablePlayers(playerList, session){
	session.availablePlayers = [];
	for(num i = 0; i<playerList.length; i++){
		//dead players are always unavailable.
		if(!playerList[i].dead){
			session.availablePlayers.push(playerList[i]);
		}
	}
	return session.availablePlayers;
}



//playerlist is everybody in the medium
//might not be all players in the begining.
dynamic processReckoning(playerList, session){
	String ret = "";
	for(num i = 0; i<session.reckoningScenes.length; i++){
		var s = session.reckoningScenes[i];
		if(s.trigger(playerList)){
		//	session.scenesTriggered.push(s);
		session.numScenes ++;
			//print(s);
			//print("was triggered");
			ret += s.content() + " <br><br> ";
		}
	}

	for(num i = 0; i<session.deathScenes.length; i++){
		var s = session.deathScenes[i];
		if(s.trigger(playerList)){
		//	session.scenesTriggered.push(s);
				session.numScenes ++;
			ret += s.content() + " <br><br> ";
		}
	}

	return ret;
}



dynamic processScenes2(playerList, session){
	//print("processing scene");
	//querySelector("#story").append("processing scene");
	String ret = "";
	setAvailablePlayers(playerList,session);
	for(num i = 0; i<session.available_scenes.length; i++){
		var s = session.available_scenes[i];
		//var debugQueen = queenStrength;
		if(s.trigger(playerList)){
			//session.scenesTriggered.push(s);
			session.numScenes ++;
			s.renderContent(session.newScene());
			if(!s.canRepeat){
				removeFromArray(s,session.available_scenes);
			}
		}
	}

	for(num i = 0; i<session.deathScenes.length; i++){
		var s = session.deathScenes[i];
		if(s.trigger(playerList)){
		//	session.scenesTriggered.push(s);
		session.numScenes ++;
			s.renderContent(session.newScene());
		}
	}


	return ret;
}



//scenes call this
dynamic chatLine(start, player, line){
  if(player.grimDark  > 3){
		line = Zalgo.generate(line);
    return start + line.trim()+"\n"; //no whimsy for grim dark players
  }else if(player.grimDark  > 1){
			return start + line.trim()+"\n"; //no whimsy for grim dark players
	}else{
    return start + player.quirk.translate(line).trim()+"\n";
  }
}



//playerlist is everybody in the medium
//might not be all players in the begining.
dynamic processReckoning2(playerList, session){
	String ret = "";
	for(num i = 0; i<session.reckoningScenes.length; i++){
		var s = session.reckoningScenes[i];
		if(s.trigger(playerList)){
			//session.scenesTriggered.push(s);
			session.numScenes ++;
			s.renderContent(session.newScene());
		}
	}

	for(num i = 0; i<session.deathScenes.length; i++){
		var s = session.deathScenes[i];
		if(s.trigger(playerList)){
		//	session.scenesTriggered.push(s);
		session.numScenes ++;
			s.renderContent(session.newScene());
		}
	}

	return ret;
}





//playerlist is everybody in the medium
//might not be all players in the begining.
//can't just add an "if 2.0" check, btw.
//need to have a pause between each scene to give time for rendering.
//gotta test method in scenario_controller2.js move here, modify
dynamic processScenes(playerList, session){
	//print(session);
	String ret = "";
	setAvailablePlayers(playerList,session);
	for(num i = 0; i<session.available_scenes.length; i++){
		var s = session.available_scenes[i];
		//var debugQueen = queenStrength;
		if(s.trigger(playerList)){
			//session.scenesTriggered.push(s);
			session.numScenes ++;
			//print("was triggered");
			var content = s.content();
			if(content != ""){
			ret += content + " <br><br> ";
			}else{
				"Debug: " + s;
			}
			//if(queenStrength != debugQueen){
				//print(s);
			//}
			if(!s.canRepeat){
				removeFromArray(s,session.available_scenes);
			}
		}
	}

	for(num i = 0; i<session.deathScenes.length; i++){
		var s = session.deathScenes[i];
		if(s.trigger(playerList)){
			//print(s);
			//print("was triggered");
			//session.scenesTriggered.push(s);
			session.numScenes ++;
			ret += s.content() + " <br><br> ";
		}
	}



	return ret;
}



var raggedPlayers = null; //just for scratch'
var numPlayersPreScratch

void scratch(){
	print("scratch has been confirmed");
  numPlayersPreScratch = curSessionGlobalVar.players.length;
	var ectoSave = curSessionGlobalVar.ectoBiologyStarted;

	reinit();
	curSessionGlobalVar.scratched = true;
	curSessionGlobalVar.scratchAvailable = false;
	curSessionGlobalVar.doomedTimeline = false;
	raggedPlayers = findPlayersFromSessionWithId(curSessionGlobalVar.players, curSessionGlobalVar.session_id); //but only native
	//use seeds the same was as original session and also make DAMN sure the players/guardians are fresh.
	//hello to TheLertTheWorldNeeds, I loved your amazing bug report!  I will obviously respond to you in kind, but wanted
	//to leave a permanent little 'thank you' here as well. (and on the glitch page) I laughed, I cried, I realzied that fixing guardians
	//for easter egg sessions would be way easier than initially feared. Thanks a bajillion.
	//it's not as simple as remebering to do easter eggs here, but that's a good start. i also gotta
	//rework the easter egg guardian code. last time it worked guardians were an array a session had, but now they're owned by individual players.
	//plus, at the time i first re-enabled the easter egg, session 612 totally didn't have a scratch, so i could exactly test.
	curSessionGlobalVar.makePlayers();
	curSessionGlobalVar.randomizeEntryOrder();
	curSessionGlobalVar.makeGuardians(); //after entry order established
	curSessionGlobalVar.ectoBiologyStarted = ectoSave; //if i didn't do ecto in first version, do in second

	checkEasterEgg(scratchEasterEggCallBack);



}



void scratchEasterEggCallBack(){
	initializePlayers(curSessionGlobalVar.players, curSessionGlobalVar); //will take care of overriding players if need be.


	if(curSessionGlobalVar.ectoBiologyStarted){ //players are reset except for haivng an ectobiological source
		setEctobiologicalSource(curSessionGlobalVar.players, curSessionGlobalVar.session_id);
	}
	curSessionGlobalVar.switchPlayersForScratch();

	String scratch = "The session has been scratched. The " + getPlayersTitlesBasic(getGuardiansForPlayers(curSessionGlobalVar.players)) + " will now be the beloved guardians.";
	scratch += " Their former guardians, the " + getPlayersTitlesBasic(curSessionGlobalVar.players) + " will now be the players.";
	scratch += " The new players will be given stat boosts to give them a better chance than the previous generation.";

	var suddenDeath = findAspectPlayer(raggedPlayers, "Life");
	if( suddenDeath == null) suddenDeath = findAspectPlayer(raggedPlayers, "Doom");

	//NOT over time. literally sudden death. thanks meenah!
	var livingRagged = findLivingPlayers(raggedPlayers);
	if(suddenDeath && !suddenDeath.dead){
		print("sudden death in: " + curSessionGlobalVar.session_id);
		for(num i = 0; i<livingRagged.length; i++){
			livingRagged[i].makeDead("right as the scratch happened");
		}
		scratch += " It...appears that the " + suddenDeath.htmlTitleBasic() + " managed to figure out that killing everyone at the last minute would allow them to live on in the afterlife between sessions. They may be available as guides for the players. ";
	}
	if(curSessionGlobalVar.players.length != numPlayersPreScratch){
		scratch += " You are quite sure that players not native to this session have never been here at all. Quite frankly, you find the notion absurd. ";
		print("forign players erased.");
	}
	scratch += " What will happen?";
	print("about to switch players");

	querySelector("#story").html(scratch);
	if(!simulationMode) window.scrollTo(0, 0);

	var guardians = raggedPlayers; //if i use guardians, they will be all fresh and squeaky. want the former players.

	var guardianDiv = curSessionGlobalVar.newScene();
	var guardianID = (guardianDiv.attr("id")) + "_guardians" ;
	var ch = canvasHeight;
	if(guardians.length > 6){
		ch = canvasHeight*1.5; //a little bigger than two rows, cause time clones
	}
	String canvasHTML = "<br><canvas id;='canvas" + guardianID+"' width='" +canvasWidth + "' height;="+ch + "'>  </canvas>";

	guardianDiv.append(canvasHTML);
	var canvasDiv = querySelector("#canvas"+ guardianID);
	poseAsATeam(canvasDiv, guardians, 2000); //everybody, even corpses, pose as a team.


	var playerDiv = curSessionGlobalVar.newScene();
	var playerID = (playerDiv.attr("id")) + "_players" ;
	var ch = canvasHeight;
	if(curSessionGlobalVar.players.length > 6){
		ch = canvasHeight*1.5; //a little bigger than two rows, cause time clones
	}
	String canvasHTML = "<br><canvas id;='canvas" + playerID+"' width='" +canvasWidth + "' height;="+ch + "'>  </canvas>";

	playerDiv.append(canvasHTML);
	var canvasDiv = querySelector("#canvas"+ playerID);

	//need to render self for caching to work for this
	for(num i = 0; i<curSessionGlobalVar.players.length; i++){
		curSessionGlobalVar.players[i].renderSelf();
	}
	poseAsATeam(canvasDiv, curSessionGlobalVar.players, 2000); //everybody, even corpses, pose as a team.

	intro();
}



//http://stackoverflow.com/questions/9763441/milliseconds-to-time-in-javascript
function msToTime(s) {
  var ms = s % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;
  var hrs = (s - mins) / 60;

  //return hrs + ':' + mins + ':' + secs + '.' + ms; //oh dear sweet hussie, I HOPE it won't take hours to load.
	return mins + " minutes and " + secs + " seconds";
}

void renderAfterlifeURL(){
	if(curSessionGlobalVar.afterLife.ghosts.length > 0){
		stopTime = Date.now();
		var params = window.location.href.substr(window.location.href.indexOf("?")+1);
		if (params == window.location.href) params = "";

		String html = "<Br><br><a href ;= 'rip.html?" + generateURLParamsForPlayers(curSessionGlobalVar.afterLife.ghosts,false) + "' target='_blank'>View Afterlife In New Tab?</a>";
		html += '<br><br><a href ;= "character_creator.html?seed=' +initial_seed +'&' + params + ' " target;="_blank">Replay Session </a> '
		html += "<br><br><a href ;= 'index2.html'>Random New Session?</a>"
		html += '<br><br><a href ;= "index2.html?seed=' +initial_seed +'&' + params + ' " target;="_blank">Shareable URL </a> '
		html += "<Br><Br>Simulation took: " + msToTime(stopTime - startTime) + " to render. ";
		//print("gonna append: " + html);
		querySelector("#story").append(html);
	}else{
		print("no ghosts");
	}
}



dynamic playersToDataBytes(players){
	String ret = "";
	for(num i = 0; i<players.length; i++){
		//print("player " + i + " to data byte");
		ret += players[i].toDataBytes();
	}
	return LZString.compressToEncodedURIComponent(ret);
	//return ret;
}



dynamic playersToExtensionBytes(players){
	String ret = "";
	var builder = new ByteBuilder();
	//do NOT do this because it fucks up the single player strings. i know how many players there are other ways, don't worry about it.
	//builder.appendExpGolomb(players.length) //encode how many players, doesn't have to be how many bits.
	ret += encodeURIComponent(builder.data).replace(new RegExp(r"""#""", multiLine:true), '%23').replace(new RegExp(r"""&""", multiLine:true), '%26');
	for(num i = 0; i<players.length; i++){
		//print("player " + i + " to data byte");
		ret += players[i].toDataBytesX();
	}
	return LZString.compressToEncodedURIComponent(ret);
	//return ret;
}



function truncateString(str, num) {
    return str.length > num ?;
        str.slice(0, num > 3 ? num - 3 : num) + "..." :
        str;
}


dynamic sanitizeString(string){
		return truncateString(string.replace(new RegExp(r"""<(,?:.|\n)*?>""", multiLine:true), '').replace(new RegExp(r""",""", multiLine:true),''), 144); //good enough for twitter.
	}




dynamic playersToDataStrings(players, includeChatHandle){
	List<dynamic> ret = [];
	for(num i = 0; i<players.length; i++){
		ret.push(players[i].toDataStrings(true))
	}
	//return encodeURIComponent(ret.join(",")).replace(new RegExp(r"""#""", multiLine:true), '%23').replace(new RegExp(r"""&""", multiLine:true), '%26');;
	return LZString.compressToEncodedURIComponent(ret.join(","));
}



//pair with seed for shareable url for character creator, or pair with nothing for afterlife viewer.
String generateURLParamsForPlayers(players, includeChatHandle){
	//var json = JSON.stringify(players);  //inside of players handles looking for keys
	//print(json);
	//if want localStorage , then compressToUTF16  http://pieroxy.net/blog/pages/lz-string/guide.html
	//var compressed = LZString.compressToEncodedURIComponent(json);
	//print(compressed);
	var data = playersToDataBytes(players);
	var strings = playersToDataStrings(players,true);
	var extensions = playersToExtensionBytes(players);
	return "b="+data+"&s;="+strings + "&x="+extensions;

 }



 dynamic dataBytesAndStringsToPlayers(bytes, strings, xbytes){
	 print("dataBytesAndStringsToPlayers: xbytes is: " + xbytes);
	//bytes are 11 chars per player
	//strings are 5 csv per player.
	//print(bytes);
	//print(bytes.length);
	strings = strings.split(",");
	List<dynamic> players = [];
	//print(bytes);
	for(num i = 0; i<bytes.length/11; i+=1){;
		//print("player i: " + i + " being parsed from url");
		var bi = i*11; //i is which player we are on, which is 11 bytes long
		var si = i*5; //or 5 strings long
		var b = bytes.substring(bi, bi+11);
		List<dynamic> s = [];
		var s = strings.slice(si, si +5);
		//print("passing b to player parser");
		//print(b);
		var p = (dataBytesAndStringsToPlayer(b,s));
		p.id = i; //will be overwritten by sim, but viewer needs it
		players.push(p);
	}
	//if(extensionString) player.readInExtensionsString(extensionString);
	if(xbytes) applyExtensionStringToPlayers(players, xbytes);
	return players;

 }



 void applyExtensionStringToPlayers(players, xbytes){
   var reader = new ByteReader(stringToByteArray(xbytes), 0);
   for(num i = 0; i<players.length; i++){
        players[i].readInExtensionsString(reader);
   }
 }



 dynamic stringToByteArray(str){
    var buffer = new ArrayBuffer(str.length);
    var uint8View = new Uint8Array(buffer);
    for(num i = 0; i<str.length; i++){
        uint8View[i] = str.charCodeAt(i);
    }
    return buffer;
 }



//TODO FUTUREJR, REMOVE THIS METHOD AND INSTAD RELY ON session.RenderingEngine.renderers[1].dataBytesAndStringsToPlayer
//see player.js toDataBytes and toDataString to see how I expect them to be formatted.
dynamic dataBytesAndStringsToPlayer(charString, str_arr){
	 var player = new Player();
	 player.quirk = new Quirk();
	 //print("strings is: " + str_arr);
	 //print("chars is: " + charString);
	 player.causeOfDrain = sanitizeString(decodeURI(str_arr[0]).trim());
	 player.causeOfDeath = sanitizeString(decodeURI(str_arr[1]).trim());
	 player.interest1 = sanitizeString(decodeURI(str_arr[2]).trim());
	 player.interest2 = sanitizeString(decodeURI(str_arr[3]).trim());
	 player.chatHandle = sanitizeString(decodeURI(str_arr[4]).trim());
	 //for bytes, how to convert uri encoded string into char string into unit8 buffer?
	 //holy shit i haven't had this much fun since i did the color replacement engine a million years ago. this is exactlyt he right flavor of challenging.
	 //print("charString is: " + charString);
	 player.hairColor = intToHexColor((charString.charCodeAt(0) << 16) + (charString.charCodeAt(1) << 8) + (charString.charCodeAt(2)) );
	 player.class_name = intToClassName(charString.charCodeAt(3) >> 4);
	 print("I believe the int value of the class name is: " + (charString.charCodeAt(3) >> 4) + " which is: " + player.class_name);
	 player.aspect = intToAspect(charString.charCodeAt(3) & 15) ;//get 4 bits on end;
	 player.victimBlood = intToBloodColor(charString.charCodeAt(4) >> 4);
	 player.bloodColor = intToBloodColor(charString.charCodeAt(4) & 15);
	 player.interest1Category = intToInterestCategory(charString.charCodeAt(5) >> 4);
	 player.interest2Category = intToInterestCategory(charString.charCodeAt(5) & 15);
	 player.grimDark = charString.charCodeAt(6) >> 5;
	 player.isTroll = 0 !;= ((1<<4) & charString.charCodeAt(6)) //only is 1 if character at 1<<4 is 1 in charString
	 player.isDreamSelf = 0 !;= ((1<<3) & charString.charCodeAt(6))
	 player.godTier = 0 !;= ((1<<2) & charString.charCodeAt(6))
	 player.murderMode = 0 !;= ((1<<1) & charString.charCodeAt(6))
	 player.leftMurderMode = 0 !;= ((1) & charString.charCodeAt(6))
	 player.robot = 0 !;= ((1<<7) & charString.charCodeAt(7))
	 var moon = 0 !;= ((1<<6) & charString.charCodeAt(7));
	 //print("moon binary is: " + moon);
	 player.moon = moon ? "Prospit" : "Derse";
	 //print("moon string is: "  + player.moon);
	 player.dead = 0 !;= ((1<<5) & charString.charCodeAt(7))
	 //print("Binary string is: " + charString[7]);
	 player.godDestiny = 0 !;= ((1<<4) & charString.charCodeAt(7))
	 player.quirk.favoriteNumber = charString.charCodeAt(7) & 15;
	 print("Player favorite number is: " + player.quirk.favoriteNumber);
	 player.leftHorn = charString.charCodeAt(8);
	 player.rightHorn = charString.charCodeAt(9);
	 player.hair = charString.charCodeAt(10);
	 if(player.interest1Category) interestCategoryToInterestList(player.interest1Category ).push(player.interest1) //maybe don't add if already exists but whatevs for now.
	 if(player.interest2Category )interestCategoryToInterestList(player.interest2Category ).push(player.interest2);

	 return player;
}



//looks not called anymore since i moved away from json.
 dynamic objToPlayer(obj){
	 var ret = new Player();
	 for (var prop in obj){
		 print(prop + " : " + obj[prop]);
		 ret[prop] = obj[prop];
	 }
	 print(ret.interestCategory1);
	 interestCategoryToInterestList(ret.interest1Category ).push(ret.interest1) //maybe don't add if already exists but whatevs for now.
	 interestCategoryToInterestList(ret.interest2Category ).push(ret.interest2);
	 ret.quirk = new Quirk();
	 ret.quirk.favoriteNumber = obj.quirk.favoriteNumber;
	 return ret;
 }