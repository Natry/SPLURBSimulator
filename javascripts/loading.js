var imagesWaiting = 0;
var imagesLoaded = 0;

function loadFuckingEverything(skipInit){
  var canvas = document.getElementById("loading");
  var ctx = canvas.getContext('2d');
  var imageString = "loading.png";
  var img=document.getElementById(imageString);
  var width = img.width;
  var height = img.height;
  ctx.drawImage(img,0,0,width,height);
	loadAllImages(skipInit);
}

//load everything while showing a progress bar. delete loadingCanvas when done.
function load(players, guardians,skipInit){
  var guardians = getGuardiansForPlayers(players)
  var canvas = document.getElementById("loading");
  var ctx = canvas.getContext('2d');
  var imageString = "loading.png";
  var img=document.getElementById(imageString);
  var width = img.width;
  var height = img.height;
  ctx.drawImage(img,0,0,width,height);
	loadAllImagesForPlayers(players, guardians,skipInit);
}

function loadAllImages(skipInit){
	loadOther(skipInit);
  loadAllPossiblePlayers(skipInit);

}

function loadAllImagesForPlayers(players, guardians,skipInit){
	var numImages = 0;
	//same number of players and guardians
	for(var i = 0; i<players.length; i++){
		loadPlayer(players[i],skipInit);
	}
	//guardians aren't going to match players if combo session
	for(var i = 0; i<guardians.length; i++){
		loadPlayer(guardians[i],skipInit);
	}

	loadOther(skipInit);

}



function addImageTagLoading(url){
  //console.log(url);
	//only do it if image hasn't already been added.
	if(document.getElementById(url) == null) {
		var tag = '<img id ="' + url + '" src = "images/' + url + '" style="display:none">';
		$("#loading_image_staging").append(tag);
	}

}

function checkDone(skipInit){
  $("#loading_stats").html("Images Loaded: " + imagesLoaded);
	if(imagesLoaded != 0 && imagesWaiting == imagesLoaded){
		//$("#loading").remove(); //not loading anymore
    if(skipInit){
      renderPlayersForEditing();
      return;
    }
		intro();
	}
}

function loadImage(img,skipInit){
	imagesWaiting ++;
	var imageObj = new Image();
  imageObj.onload = function() {
      //  context.drawImage(imageObj, 69, 50); //i don't want to draw it. i could put it in image staging?
			addImageTagLoading(img);
			imagesLoaded ++;
			checkDone(skipInit);
  };

  imageObj.onerror = function(){
    debug("Error loading image: " + this.src)
    //alert(this.src)
  }
      imageObj.src = "images/"+img;
}

//load pesterchum, blood, big aspect symbols, echeladders, god tier level up, romance symbols, babies, grubs
function loadOther(skipInit){
	loadImage("jr.png",skipInit);
	loadImage("stab.png",skipInit);
  loadImage("denizoned.png",skipInit);
  loadImage("sceptre.png",skipInit);
	loadImage("rainbow.png",skipInit);
	loadImage("gears.png",skipInit);
	loadImage("mind_forehead.png",skipInit)
	loadImage("ab.png",skipInit)
	loadImage("grimdark.png",skipInit);
  loadImage("squiddles_chaos.png",skipInit);
	loadImage("fin1.png",skipInit);
	loadImage("fin2.png",skipInit);
	loadImage("echeladder.png",skipInit)
	loadImage("godtierlevelup.png",skipInit);
	loadImage("pesterchum.png",skipInit);
	loadImage("blood_puddle.png",skipInit)
	loadImage("scratch_face.png",skipInit)
	loadImage("robo_face.png",skipInit)
	loadImage("calm_scratch_face.png",skipInit)
	loadImage( "Prospit.png",skipInit)
	//loadImage("Prospit_symbol.png");
	loadImage("Derse.png",skipInit)
	//loadImage("Derse_symbol.png");
	loadImage("bloody_face.png",skipInit)
	loadImage("Moirail.png",skipInit)
	loadImage("Matesprit.png",skipInit)
	loadImage("Auspisticism.png",skipInit)
	loadImage("Kismesis.png",skipInit)
	loadImage("prince_hat.png",skipInit)
	loadImage("discuss_romance.png",skipInit)
	loadImage("discuss_hatemance.png",skipInit)
	loadImage("discuss_breakup.png",skipInit)
	loadImage("discuss_sburb.png",skipInit)
	loadImage("discuss_jack.png",skipInit)
	loadImage("discuss_murder.png",skipInit)
  loadImage("discuss_raps.png",skipInit)
	for(var i = 1; i<4; i++){
		loadImage("Bodies/baby"+i + ".png",skipInit)
	}

	for(var i = 1; i<4; i++){
		loadImage("Bodies/grub"+i + ".png",skipInit)
	}
}

function loadAllPossiblePlayers(skipInit){
    var numBodies = 12;  //1 indexed
    var numHair = 60; //+1025 for rufio.  1 indexed
    var numHorns = 46; //1 indexed.
    //var numWings = 12 //0 indexed, not 1.  for now, don't bother with wings. not gonna show godtier, for now.
    for(var i = 1; i<=numBodies; i++){
      if(i<10){
        loadImage("Bodies/reg00"+i+".png",skipInit);  //as long as i i do a 'load' again when it's to to start the simulation, can get away with only loading these bodies.
      }else{
        loadImage("Bodies/reg0"+i+".png",skipInit);  //as long as i i do a 'load' again when it's to to start the simulation, can get away with only loading these bodies.
      }
    }

    for(var i = 1; i<=numHair; i++){
        loadImage("Hair/hair_back"+i+".png",skipInit);
        loadImage("Hair/hair"+i+".png",skipInit);
    }
	
	loadImage("Hair/hair_back1025.png",skipInit);
    loadImage("Hair/hair1025.png",skipInit);

    for(var i = 1; i<=numHorns; i++){
        loadImage("Horns/left"+i+".png",skipInit);
        loadImage("Horns/right"+i+".png",skipInit);
    }
}

//load hair, horns, wings, regular sprite, god sprite, fins, aspect symbol, moon symbol for each player
function loadPlayer(player,skipInit){
	//var imageString = "Horns/right"+player.rightHorn + ".png";
  //addImageTag(imageString)
	loadImage(playerToRegularBody(player),skipInit);
  loadImage(playerToDreamBody(player),skipInit);
	loadImage(playerToGodBody(player),skipInit);
	loadImage(player.aspect + ".png",skipInit);

	loadImage(player.aspect + "Big.png",skipInit)
	loadImage("Hair/hair"+player.hair+".png",skipInit)
  loadImage("Hair/hair_back"+player.hair+".png",skipInit)

	if(player.isTroll == true){
		loadImage("Wings/wing"+player.quirk.favoriteNumber + ".png",skipInit)
		loadImage("Horns/left"+player.leftHorn + ".png",skipInit);
		loadImage("Horns/right"+player.rightHorn + ".png",skipInit);
		//loadImage("Bodies/grub"+player.baby + ".png")
	}else{
		//loadImage("Bodies/baby"+player.baby + ".png")
	}
}
