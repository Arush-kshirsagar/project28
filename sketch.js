const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,tree,stone,boy
var launcherObj,ground;

function preload()
{
  
  boyImg=loadImage("boy.png")
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
mango1=new Mango(800,200,30);
mango2=new Mango(1100,100,30);
mango3=new Mango(1170,140,30);
mango4=new Mango(1010,130,30);
mango5=new Mango(1000,70,30);

mango6=new Mango(1100,70,30);
mango7=new Mango(1000,230,30);
mango8=new Mango(900,230,30);
mango9=new Mango(1140,150,30);
mango10=new Mango(1100,230,30);
mango11=new Mango(1200,200,30);

tree=new Tree(1250,900);








ground=new Ground(width/2,600,width,20);


stone=new Stone(100,420,40);



boy=createSprite(150,450,100,100);
boy.addImage(boyImg)
boy.scale=0.2;


launcherObj=new SlingShot(stone.body,{x:50,y:330});

	Engine.run(engine);
  
}


function draw() {
  
  background("white");
  rectMode(CENTER);

  stone.display();
  boy.display();
  tree.display();
  launcherObj.display();
  ground.display();
   mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  
  
  
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);



  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
  
  }
  function mouseReleased(){
      launcherObj.fly();
  }


	function keyPressed(){
		if(keyCode===32){
		  Matter.Body.setPosition(stone.body,{x:200,y:200});
		  launcherObj.attach(stone.body) 
		}
	
}
function detectCollision(stone,mango1){
	mangoBodyPosition=mango1.body.position;
	stoneBodyPosition=stone.body.position;
	var distance=dist(stone.body.position.x,stone.body.position.y,mango1.body.position.x,mango1.body.position.y)
}



