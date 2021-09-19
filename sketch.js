var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");

  groundImage = loadImage("ground2.png")
  cloudImage = loadImage(" cloud.png ");
  

  obstacleImage = loadImage(" obstacle1.png");
  obstacleImage = loadImage(" obstacle2.png");

}




function setup() {
  createCanvas(600, 200);

  //create a trex sprite
  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;

  //create a ground sprite
  ground = createSprite(200, 180, 400, 20);
  ground.addImage("ground", groundImage);
  ground.x = ground.width / 2;
  ground.velocityX = -4;

  invisibleGround = createSprite(200, 190, 400, 10);
  invisibleGround.visible = false;

 
 

}

function draw() {
  background(220);

  //jump when the space button is pressed
  if (keyDown("space") && trex.y > 150) {
    trex.velocityY = -10;
  }
   
   
  trex.velocityY = trex.velocityY + 0.8
  
 obstacles()



  spawnClouds()
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
 
  trex.collide(invisibleGround);
  drawSprites();

}
function spawnClouds() {
  if (frameCount % 60 === 0) {
    cloud = createSprite(600, 100, 40, 20);
    cloud.y= Math.round (random (10,60))
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
  }
}
 function obstacles() {
   if(frameCount% 60===0){
   cacti =createSprite (200,50,40,20);  
   cacti.x=Math.round  (random(10,200)) ;
   cacti.addImage( obstacleImage);
  cacti.scale=;
  cacti.velocityX= -4;
  }
 }

 