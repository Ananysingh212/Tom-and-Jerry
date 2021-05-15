var Tom, Jerry;
var BgImg, mouse1Img, mouse2Img, mouse3Img, cat1Img, cat2Img, cat3Img;


function preload() {
  cat1Img = loadImage("cat1.png");
  cat2Img = loadImage("cat2.png","cat3.png");
  cat3Img = loadImage("cat4.png")

  BgImg = loadImage("garden.png")

  mouse1Img = loadImage("mouse1.png");
  mouse2Img = loadImage("mouse3.png","mouse2.png");
  mouse3Img = loadImage("mouse4.png")
}

function setup(){
    createCanvas(1000,800);

     Tom = createSprite(800,650,10,10);
     Tom.addImage("cat",cat1Img);
     Tom.scale = 0.2;

     Jerry = createSprite(100,650,10,10);
     Jerry.addImage("mouse",mouse1Img);
     Jerry.scale = 0.2;
}

function draw() {

    background(BgImg);

    if(Tom.x == 270){
      Tom.addImage("cat",cat3Img);
      Tom.changeAnimation("cat",cat3Img);
      Tom.velocityX = 0;

      Jerry.addImage("mouse",mouse3Img);
      Jerry.changeAnimation("mouse",mouse3Img);
    }
     
    keyPressed();

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
      if(keyDown("LEFT_ARROW")){
          Tom.velocityX = -2;
          Tom.addImage("cat",cat2Img);
          Tom.changeAnimation("cat",cat2Img);

          Jerry.addImage("mouse",mouse2Img);
          Jerry.changeAnimation("mouse",mouse2Img);
      }

}
