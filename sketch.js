const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 
function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(500,50,600,20),
    bob1 = new Bob(200,500);
	bob2 = new Bob(250,500);
	bob3 = new Bob(300,500);
	bob4 = new Bob(350,500);
	bob5 = new Bob(400,500);
	rope1 = new Rope(bob1.body,roof.body,50,0)
	rope2 = new Rope(bob2.body,roof.body,100,0)
	rope3 = new Rope(bob3.body,roof.body,150,0)
	rope4 = new Rope(bob4.body,roof.body,200,0)
	rope5 = new Rope(bob5.body,roof.body,250,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display(); 
  rope2.display(); 
  rope3.display(); 
  rope4.display(); 
  rope5.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-140,y:-120});
	}
 }


