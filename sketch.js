function preload() {
  planeImg = loadImage("assets/plane_preview.png");
  skyImg = loadImage("assets/sky1.png");
  spaceImg = loadImage("assets/outerspace.jpg");
  explosionImg = loadImage("assets/Explosion1.gif");
  meteorImg = loadImage("assets/meteor1.gif");
}
function setup() {
  createCanvas(600, 700);
  gameState = "wait";
  space = createSprite(width / 2, height / 2);
  space.addImage(spaceImg);
  space.velocityY = +1;
  space.scale = 2.75;
  plane = createSprite(100, 575);
  plane.addImage(planeImg);
  plane.scale = 0.5;
  gameSound = createAudio("assets/gamesounds.wav");
  gameSound.volume(0.1);
  if (gameState === "wait") {
    background(spaceImg);
    input = createInput("").attribute("placeholder", "Enter the name");
    input.position(width/2-100,height/2-100)
    input.class("customInput")
    button = createButton("PLAY");
    button.position(width/2-85,height/2-50 )
    button.mousePressed(function () {
      gameState = "play";
    });
    button.class("playButton")
    gameTitle = createElement("h2");
    gameTitle.position(width/2-150,50)
    gameTitle.class("gameTitle")
    gameTitle.html("Airplane Dodger")
  }
}

function draw() {
  if (gameState === "play") {
    background(0);
    hideElements()
    plane.x = mouseX;
    if (space.y > 425) {
      space.y = 375;
    }
    gameSound.play();
    obstacles();
    drawSprites();
  }
  
}

function obstacles() {
  if (frameCount % 80 === 0) {
    meteor = createSprite(random(0, width), 0);
    meteor.addImage(meteorImg);
    meteor.velocityY = 5;
    meteor.velocityX = -2;
    meteor.scale = 0.08;
  }
  if (frameCount % 100 === 0) {
    meteor = createSprite(650, random(50, 350));
    meteor.addImage(meteorImg);
    meteor.velocityY = 5;
    meteor.velocityX = -2;
    meteor.scale = 0.08;
  }

  
}
function hideElements(){
  gameTitle.hide()
  button.hide()
  input.hide()
}
