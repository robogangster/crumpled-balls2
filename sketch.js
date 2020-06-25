var helicopterIMG, helicopterSprite, packageSprite,packageIMG,dustbin1,dustbin2,dustbin,dustbinImg;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinImg=loadImage("dustbin.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
ground=Bodies.rectangle(400,700,800,20);

World.add(world,ground);
ground.isStatic=true;
	Engine.run(engine);
  dustbin1=Bodies.rectangle(666,640,20,130);
World.add(world,dustbin1);

dustbin2=Bodies.rectangle(767,640,20,140);
World.add(world,dustbin2);
	p1=new Paper(100,650,20)


	dustbin1.isStatic=true;
	dustbin2.isStatic=true;
	dustbinImg=loadImage("dustbin.png");
	dustbin=createSprite(710, 630, 10,10);
	dustbin.addImage(dustbinImg)
	dustbin.scale=0.4;

}


function draw() {
  rectMode(CENTER);
  background(255);
  rect(ground.position.x,ground.position.y,800,20);
  p1.display();
  drawSprites();
text("x:"+mouseX+"y:"+mouseY,mouseX,mouseY);
//rect(dustbin1.position.x,dustbin1.position.y,20,130);
//rect(dustbin2.position.x,dustbin2.position.y,20,140);

}

function keyPressed(){
	if (keyCode===UP_ARROW){
Matter.Body.applyForce(p1.body,p1.body.position,{x:50,y:-45})
	}
}
//666
