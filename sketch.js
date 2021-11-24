var backgroundImg;
var spaceCraft1Img, spaceCraft2Img, spaceCraft3Img, spaceCraft4Img;
var iss, spacecraft;
var hasDocked = false;
var issImg;
var issDock;



function preload(){
backgroundImg = loadImage("spacebg.jpg");
spaceCraft1Img = loadImage("spacecraft1.png");
spaceCraft2Img = loadImage("spacecraft2.png");
spaceCraft3Img = loadImage("spacecraft3.png");
spaceCraft4Img = loadImage("spacecraft4.png");
issImg = loadImage("iss.png");

}

function setup() {
  createCanvas(800,400);
  
  spacecraft = createSprite(random(70, 730), 30, 30, 40);
  spacecraft.addImage(spaceCraft1Img);
  spacecraft.scale = 0.22;

  issDock = createSprite(345, 200, 10, 10);

  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImg);
  iss.scale = 0.95;
}

function draw() {
  background(backgroundImg);  

  if(!hasDocked){


    if(keyDown("right")){
      spacecraft.x += 3;
      spacecraft.addImage(spaceCraft4Img);
    }

    if(keyDown("left")){
      spacecraft.x -= 3;
      spacecraft.addImage(spaceCraft3Img);
    }

    if(keyDown("up")){
      spacecraft.y -= 3;
    }

    if(keyDown("down")){
      spacecraft.y += 3;
      spacecraft.addImage(spaceCraft2Img);
    }
  }

  if(spacecraft.isTouching(issDock)){
    hasDocked = true;

    text("Docking Successful!", iss.x - 50, iss.y + 150);
    spacecraft.addImage(spaceCraft1Img);
  }
  drawSprites();
}