
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof1= new roof(360,350,250,20,"black")

	bob1= new bob(395,545,30,"blue");
	bob2= new bob(450,545,30,"blue");
	bob3= new bob(280,545,30,"blue");
	bob4= new bob(342,545,30,"blue");





	string2= new Rope(bob4.body,{x:342,y:350})
	string3= new Rope(bob1.body,{x:395,y:350})
	string4 = new Rope(bob2.body,{x:450,y:350})
	string5 = new Rope(bob3.body,{x:280,y:350})
	
    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background("white");

 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 
 

 
 string2.display();
 string3.display();
 string4.display();
 string5.display();

 roof1.display();

  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === RIGHT_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-160,y:+160});

	}
}
