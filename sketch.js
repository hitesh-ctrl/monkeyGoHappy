var monkey,monkey_running,banana,bananaImage,bananaGroup,obstacle,obstacleImage,obstacleGroup,bg,bgimg,score,ground;

function preload(){
  bananaImage=loadImage("banana.png");
  obstacleImage=loadImage("stone.png");
  bgimg=loadImage("jungle.jpg");
  monkey_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
}

function setup() {
  createCanvas(800, 400);
 bg=createSprite(0,0,800,400)
  bg.addImage(bgimg)
  bg.scale=1.5;
  monkey=createSprite(100,340)
  monkey.addAnimation('running',monkey_running)
  monkey.scale=0.1;
  
   ground=createSprite(400,380,800,10)
  ground.visible=false;
  
  bananaGroup=new Group();
  obstacleGroup=new Group();
  score=0;
}

function draw() {
  background(220);
  ground.velocityX=-4;
  bg.velocityX=-4;
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  if(keyDown("space")){
    monkey.velocityY=-10;
  }
  monkey.velocityY++;
  if(bg.x<0){
    bg.x=bg.width/2;
  }
  monkey.collide(ground);
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
    score=score+2
  }
  if(obstacleGroup.isTouching(monkey)){
    monkey.scale=0.08;
  }
  
  switch(score){
    case 10:
              monkey.scale=0.12
               break;
   case 20:
              monkey.scale=0.14;
              break;
  case 30:    monkey.scale=0.16
              break;
  case 40:    monkey.scale=0.18
              break;
 default:
              break;
  }
  spawnBanana();
  spawnObstacle();
  drawSprites();
  textSize(20);
  stroke("white");
  text("score: "+score,500,50)
}
function spawnBanana(){
  if (frameCount%80===0){
    banana=createSprite(800,250,20,40)
    banana.scale=0.05;
    banana.addImage(bananaImage);
    banana.velocityX=-4;
    banana.y=Math.round(random(120,200));
    banana.lifetime=200;
    bananaGroup.add(banana);
  }
  
}

function spawnObstacle(){
  if (frameCount%100===0){
    obstacle=createSprite(800,360,20,40)
    obstacle.scale=0.1;
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-4;
    obstacle.lifetime=200;
  obstacleGroup.add(obstacle);
  }
  
}

