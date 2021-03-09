
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(800,700,1600,30);
	//Create the Bodies Here.
	hammer = new Hammer(mouseX,mouseY,100,50);
	iron = new Iron(400,600,70,50);
	sand1 = new Sand(650,600);
	sand2= new Sand(655,600);
	sand3 = new Sand(660,600);
	sand4 = new Sand(665,600);
	sand5 = new Sand(670,600);
	sand6 = new Sand(675,600);
	sand7 = new Sand(680,600);
	sand8 = new Sand(685,600);
	sand9 = new Sand(690,600);
	sand10 = new Sand(695,600);
	stone = new Stone(900,600,100,100);
	rubber = new Rubber(1200,600);
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();

  iron.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  stone.display();
  rubber.display();
  hammer.display(); 
}