
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;
var bob6;
var bobR;
var ground;
var box1;

function preload()
{
	
}

function setup() {
  createCanvas(1200, 700);

  engine = Engine.create();
	world = engine.world;


  bob1 = new Bob(400,400,30);
  
  /*bob1 = new Bob(400,400,30);
  bob2 = new Bob(471,400,30);
  bob3 = new Bob(532,400,30);
  bob4 = new Bob(379,400,30);
  bob5 = new Bob(328,400,30);
  //bob6 = new Bob(390,170)*/

  roof = new Roof(395+120,170,250,20)

  rope1 = new Rope(bob1.body,roof.body,0,0)

  var options = {
    isStatic : true,
    friction : 0.6
  }
  ground = Matter.Bodies.rectangle(600,650,1200,20,options);
  World.add(world,ground)

  box1 = new Box(900, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5 = new Box(900, 100, 70, 70);
  box6 = new Box(900, 100, 70, 70);
  box7 = new Box(800, 100, 70, 70);
  box8 = new Box(800, 100, 70, 70);
  box9 = new Box(800, 100, 70, 70);
  box10 = new Box(800, 100, 70, 70);
  box11 = new Box(800, 100, 70, 70);
  box12 = new Box(800, 100, 70, 70);
  box13 = new Box(700, 100, 70, 70);
  box14 = new Box(700, 100, 70, 70);
  box15 = new Box(700, 100, 70, 70);
  box16 = new Box(700, 100, 70, 70);
  box17 = new Box(700, 100, 70, 70);
  box18 = new Box(700, 100, 70, 70);
  box19 = new Box(700, 100, 70, 70);
  box20 = new Box(700, 100, 70, 70);
  
/*5
57
107
-45
-97*/
	

	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("orange");
  bob1.display();
 roof.display();

 rect(ground.position.x,ground.position.y,1200,20);

rope1.display();

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();

//bob6.display();
//keyPressed();
//strokeWeight(6);
fill("pink")
strokeWeight(4)
stroke("blue")
textFont("harrington")
textSize(27)
text("*Press the up arrow key",100,100)

  drawSprites();
 
}
function keyPressed()
{
if(keyCode === UP_ARROW){

  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-220,y:-179});
  
}
}



