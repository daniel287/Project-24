
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, ground2, box1, box2, box3, ball;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow");

	engine = Engine.create();
	world = engine.world;

	box1 = new Box(800,640, 200, 20);
	box2 = new Box(725,640, 20, 100);
	box3 = new Box(875,640, 20, 100);

	ball = new Ball(200,640)

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  box1.display();
  box2.display();
  box3.display();

  ball.display();

  drawSprites();
  keyPressed();
}

function keyPressed() {
	if (keyCode  === UP_ARROW) {
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:.275,y:-0.3});
	 }
   }