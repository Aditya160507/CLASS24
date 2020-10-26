const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine, myWorld,ball,ground;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird1;
function setup() {
  createCanvas(1200,400);
  myEngine=Engine.create();
  myWorld=myEngine.world;
  /*createSprite(400, 200, 50, 50);
  var ground_options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,200,20,ground_options);
  World.add(myWorld,ground);
  var ball_options={
restitution:1

  }
  ball=Bodies.circle(200,100,20,ball_options);
  World.add(myWorld,ball);*/
  box1=new box(700,320,70,70);
  box2=new box(920,320,70,70);
  box3=new box(700,240,70,70);
  box4=new box(920,240,70,70);
  box5=new box(810,160,70,70);
  ground=new Ground(600,height,1200,20);
  pig1  = new pig(810,350);
  pig2  = new pig(810,220);
  log1 = new log(810,260,295,PI/2);
  log2 = new log(810,180,295,PI/2);
  log3 = new log(760,120,150,PI/7);
  log4 = new log(870,120,150,-PI/7);
  bird1 = new bird(200,200);
} 

function draw() {
  background("black"); 
  Engine.update(myEngine);
  /*rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);*/
  //drawSprites();
  box1.display();
  console.log(box1.angle);
  box2.display();
  ground.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  log3.display();
  box5.display();
  log4.display();
  bird1.display();
}                   