// const Engine = Matter.Engine;
// const World = Matter.World;
// const Bodies = Matter.Bodies; 
var engine;
var playerCar,carObs1,carObs2,truck,garbage,oldPerson,manhole,taxi;
var playerCarImg,carObs1Img,carObs2Img,truckImg,garbageImg,oldPersonImg,manholeImg,taxiImg,titleImg,trackImg,backgroundImg;
var gameState = 0;
var time = 100;
var form,game;
var bgImg;
var database;
var back;


function preload(){
  playerCarImg = loadImage("Images/car.png");
  carObs1Img = loadImage("Images/greencar.jpg");
  carObs2Img = loadImage("Images/Bluecar.png");
  truckImg = loadImage("Images/Truck.jpg");
  taxiImg = loadImage("Images/Taxi image.jpg");
  titleImg = loadImage("Images/title Image.gif");
  trackImg = loadImage("Images/track.jpg");
  garbageImg = loadImage("Images/Garbage.png");
}

function setup(){
  createCanvas(displayWidth, displayHeight);
  // engine = Engine.create();
  // database = firebase.database();
  back = createSprite(displayWidth/2-50,displayHeight/2-50,displayWidth,displayHeight);


  form = new Form;
  game = new Game;
}


function draw(){
  // Engine.update(engine);
  background(255);
  fill("red");
  textSize(20);
  text("You are left with: "+ time,displayWidth/2-500,displayHeight/2-500);
  if(gameState === 0){
    form.display();
  }
  else if(gameState === 1){
    form.hide();
    game.play();
    game.time();
    
    
    // back.y = back.y + 10;
    back.addImage("back",trackImg);
    back.scale = 0.5;
    back.velocityY = 10;
    
    if(back.y>displayHeight){
      back.y = back.height/2;
    }
  }
  else if(gameState === 2){
    game.end();
  }

  drawSprites();

}

function keyPressed(){
  if(keyCode === 32 && gameState === 0){
    gameState = 1;
  }
}
