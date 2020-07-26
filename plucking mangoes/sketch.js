
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload (){
	backgroundimg = loadImage("sprites/bg.png");
}
function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	
	tree1 = new tree(700,350);
	mango1 = new Mango(800,260);
	mango2 = new Mango(550,270);
	mango3 = new Mango(700,175);
	mango4 = new Mango(630,210);
	mango5 = new Mango(900,275);
	mango6 = new Mango(700,250);
     
	stone1 = new stone(130,480);
	ground1 = new ground(500,600);
	boy1 = new boy(200,540);
	band1 = new band(128,485);
	attach = new constraint(stone1.body,band1.body);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundimg);
  
  tree1.display();
  boy1.display();
  band1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  attach.display();
  stone1.display();
  ground1.display();
  drawSprites();
 
}

function mousePressed (){
  Body.setPosition(stone1.body,stone1.body.position.x = mouseX,stone1.body.position.y = mouseY);
}

function mouseReleased (){
	attach.fly();
}




