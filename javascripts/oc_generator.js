var players = [];
var dataURLs = {};
window.onload = function() {
	makeAspectDropDown();
	makeClassDropDown();
	makeSpeciesDropDown();
  reroll();
}
function reroll(){
	makePlayers();
	//describe();
 	drawSpriteAll();
	setTimeout(function(){
		//drawSpriteAll(); //drawing sprites the first time will handle this.
		renderDownloadURLs();
	}, 1000);  //images aren't always loaded by the time i try to draw them the first time.
}

function renderDownloadURLs(){
	var keys = Object.keys(dataURLs);
	for(var i = 0; i<keys.length; i++){
		$("#"+keys[i]+"url").html("<a href = '" +dataURLs[keys[i]] + "'  target='_blank'> Download Character</a><br>" );
	}
}

function drawSpriteAll(){
  for(var i = 0; i<players.length; i++){
	  makeBG(document.getElementById("canvas"+(i+1)));
      drawSprite(document.getElementById("canvas"+(i+1)), players[i],1000);
	  writeToCanvas(document.getElementById("canvas"+(i+1)), players[i]); 
	  makeWriteDataURL("canvas"+(i+1) )//for writing data.
  }
}

function makeWriteDataURL(canvasId){
	canvas = document.getElementById(canvasId);
	dataURLs[canvasId] = canvas.toDataURL();
}
function makeBG(c){
	//var c = document.getElementById(canvasId);
	var ctx = c.getContext("2d");

	var grd = ctx.createLinearGradient(0, 0, 170, 0);
	grd.addColorStop(0, "#fefeff");
	grd.addColorStop(1, "#f1f1ff");

	ctx.fillStyle = grd;
	ctx.fillRect(0, 0, c.width, c.height);
}

function writeToCanvas(canvas, player,canvasId){
	var space_between_lines = 25;
	var left_margin = 10;
	var line_height = 18;
	var start = 350;
	var current = 350;
	var ctx = canvas.getContext("2d");
	//title
    ctx.font = "40px Times New Roman"
	ctx.fillStyle = getColorFromAspect(player.aspect)
	ctx.fillText(player.title(),left_margin*2,current);

	//interests
	ctx.font = "18px Times New Roman"
	ctx.fillStyle = "#000000"
	ctx.fillText("Interests: " + player.interests,left_margin,current + space_between_lines*2);

	ctx.fillText("Chat Handle: " + player.chatHandle,left_margin,current + space_between_lines*3);
	
	ctx.fillText("Guardian: " + player.lusus,left_margin,current + space_between_lines*4);

	ctx.fillText("Land: " + player.land,left_margin,current + space_between_lines*5);

	ctx.fillText("Moon: " + player.moon,left_margin,current + space_between_lines*6);

	//TODO need to handle new line myself.  font is 18 px tall. work with that. each new line adds to the count (which is now 6)
	//ctx.fillText("Quirk: " + player.quirk.rawStringExplanation(),left_margin,current + space_between_lines*6);
	var text2 = player.quirk.translate(" The quick brown fox (named Lacy) jumped over the lazy dog (named Barkey) over 1234567890 times for reasons. It sure was exciting! I wonder why he did that? Was he going to be late? I wonder....I guess we'll just have to wait and see.");
	var color2 = "";
	if(player.isTroll){
			color2 =  player.bloodColor;
	}else{
			color2 = getColorFromAspect(player.aspect);
	}
	fillTextMultiLine(canvas, "Quirk: " + player.quirk.rawStringExplanation() + "\n \n Sample: \n", text2, color2, left_margin, current + space_between_lines*7);
	

      // set canvasImg image src to dataURL
      // so it can be saved as an image
}

//http://stackoverflow.com/questions/5026961/html5-canvas-ctx-filltext-wont-do-line-breaks/21574562#21574562
function fillTextMultiLine(canvas, text1, text2, color2, x, y) {
	var ctx = canvas.getContext("2d");
	var lineHeight = ctx.measureText("M").width * 1.2;
    var lines = text1.split("\n");
 	for (var i = 0; i < lines.length; ++i) {
   		ctx.fillText(lines[i], x, y);
  		y += lineHeight;
  	}
	//word wrap these
	ctx.fillStyle = color2
 	wrap_text(ctx, text2, x, y, lineHeight, 3*canvas.width/4, "left");
	ctx.fillStyle = "#000000"
}

//http://stackoverflow.com/questions/5026961/html5-canvas-ctx-filltext-wont-do-line-breaks
function wrap_text(ctx, text, x, y, lineHeight, maxWidth, textAlign) {
  if(!textAlign) textAlign = 'center'
  ctx.textAlign = textAlign
  var words = text.split(' ')
  var lines = []
  var sliceFrom = 0
  for(var i = 0; i < words.length; i++) {
    var chunk = words.slice(sliceFrom, i).join(' ')
    var last = i === words.length - 1
    var bigger = ctx.measureText(chunk).width > maxWidth
    if(bigger) {
      lines.push(words.slice(sliceFrom, i).join(' '))
      sliceFrom = i
    }
    if(last) {
      lines.push(words.slice(sliceFrom, words.length).join(' '))
      sliceFrom = i
    }
  }
  var offsetY = 0
  var offsetX = 0
  if(textAlign === 'center') offsetX = maxWidth / 2
  for(var i = 0; i < lines.length; i++) {
    ctx.fillText(lines[i], x + offsetX, y + offsetY)
    offsetY = offsetY + lineHeight
  }
}

//deprecated in favor of pure canvas
function describe(){
	for(var i = 0; i<players.length; i++){
		//decideTroll(players[i]);
		var intro = "<canvas id='canvas" + (i+1) +"' width='400' height='800'>  </canvas>";

		//want to move all this into the canvas.
		intro += "<h1> " + players[i].htmlTitle() +" </h1>"
		intro += "<ul>"
		intro += "<li> Land: " + players[i].land
		intro += "<li> Species: "
		if(players[i].isTroll){
			intro += "Troll"
		}else{
			intro += "Human"
		}
		intro += "<li>Blood Color:"
		intro += "<font color= '" + players[i].bloodColor + "'> "
		intro +=  players[i].bloodColor + "</font>"
		if(players[i].isTroll && players[i].aspect == "Blood"){
			intro += " (Blood Player Default)";
		}
		if(players[i].bloodColor == "#610061"){
			intro += " (Seadweller) ";
		}else if(players[i].bloodColor == "#99004d"){
			intro += " (Heiress) ";
		}
		intro += "<li> Guardian: " + players[i].lusus

		intro += "<li> Moon: " +players[i].moon

		var i1 = getRandomElementFromArray(interests);
		var i2 = getRandomElementFromArray(interests);
		//var i2 = i1
		intro += "<Li> Defining Interests: " +i1 + " and " + i2;
		if(i1 == i2){
			intro += " (That wasn't a glitch. They are simply the best there is at " +i1 + ".)"
		}
		intro += "<Li>  Quirk: " + players[i].quirk.stringExplanation() +"</li>";
		intro += "Sample: "
		if(players[i].isTroll){
			intro += "<font color= '" + players[i].bloodColor + "'> "
		}else{
			intro += getFontColorFromAspect(players[i].aspect)
		}
		intro += players[i].quirk.translate(" The quick brown fox (named Lacy) jumped over the lazy dog (named Barkey) over 1234567890 times for reasons. It sure was exciting! I wonder why he did that? Was he going to be late? I wonder....I guess we'll just have to wait and see.");
		intro += " <br><br> <div id = 'gibberish" +i+"'>"
		//randomParagraph("#gibberish"+i, players[i]);
		intro += "</div></font>"

		intro += "</ul>"
		$("#player"+(i+1)).html(intro);
	}
}

function decideHemoCaste(player){
	if(player.aspect != "Blood"){  //sorry karkat
		player.bloodColor = getRandomElementFromArray(bloodColors);
	}
}

function decideLusus(player){
	if(player.bloodColor == "#610061" || player.bloodColor == "#99004d" || players.bloodColor == "#631db4" ){
		player.lusus = getRandomElementFromArray(seaLususTypes);
	}else{
		player.lusus = getRandomElementFromArray(landlususTypes);
	}


}

function randomParagraph(div, player){
	var url = "http://www.randomtext.me/api/gibberish/";
		$.get( url, function( data ) {
			//alert(data.text_out);
			$( div ).html( player.quirk.translate(data.text_out) );
		});
}

function decideTroll(player){
	if($('[name="species"] option:selected').val() == "Any" && Math.random() > .5 ){
		player.isTroll = true;
		decideHemoCaste(player);
		decideLusus(player);
		player.quirk = randomTrollQuirk();
	}else if($('[name="species"] option:selected').val() == "Troll"){
		player.isTroll = true;
		decideHemoCaste(player);
		decideLusus(player);
		player.quirk = randomTrollQuirk();
	}else{
		player.quirk = randomHumanQuirk();
	}
}

function makeAspectDropDown(){
	available_aspects = nonrequired_aspects.slice(0); //required_aspects
    available_aspects = available_aspects.concat(required_aspects.slice(0));
	var html = '<select name="aspect">'
  	html += '<option value="Any" selected = "selected">Any</option>'
	for(var i = 0; i< available_aspects.length; i++){
		html += '<option value="' + available_aspects[i] + '" >' + available_aspects[i]+'</option>'
	}
	html += '</select>'
	$("#aspectList").append(html);
}

function makeSpeciesDropDown(){
	var html = '<select name="species">'
  html += '<option value="Any" selected = "selected">Any</option>'
	html += '<option value="Human">Human</option>'
	html += '<option value="Troll" >Troll</option>'
	html += '</select>'
	$("#speciesList").append(html);
}


function makeClassDropDown(){
	available_classes = classes.slice(0); //re-init available classes. make deep copy
	var html = '<select name="className">'
  	html += '<option value="Any" selected = "selected">Any</option>'
	for(var i = 0; i< available_classes.length; i++){
		html += '<option value="' + available_classes[i] +'">' + available_classes[i]+'</option>'
	}
	html += '</select>'
	$("#classList").append(html);
}


function makePlayers(){
	players = [];

	if($('[name="className"] option:selected').val() == "Any"){
		available_classes = classes.slice(0); //re-init available classes. make deep copy
	}else{
		available_classes = [$('[name="className"] option:selected').val()];
	}

	if($('[name="aspect"] option:selected').val() == "Any"){
		available_aspects = nonrequired_aspects.slice(0); //required_aspects
   		available_aspects = available_aspects.concat(required_aspects.slice(0));
	}else{
		available_aspects = [$('[name="aspect"] option:selected').val()];
	}




	var numPlayers = 4;

	for(var i = 0; i<numPlayers; i++){
		p = (randomPlayerWithoutRemoving());
		decideTroll(p);
		players.push(p);
	}
 // players[0].class_name = "Page" //for testing

}
