
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1050,120,30);
	mango3=new mango(1100,160,30);
	mango4=new mango(1200,170,30);
	mango5=new mango(1050,150,30);
	mango6=new mango(1230,230,30);
	mango7=new mango(1180,220,30);
	mango8=new mango(1230,160,30);
	mango9=new mango(940,130,30);
	mango10=new mango(1000,100,30);
	mango11=new mango(1000,160,30);
	mango12=new mango(1140,140,30);
	mango13=new mango(900,180,30);
	mango14=new mango(920,230,30);
	mango15=new mango(970,220,30);
	mango16=new mango(1160,240,30);
	mango17=new mango(1230,220,30);
	mango18=new mango(1120,220,30);
	mango19=new mango(1020,210,30);
	mango20=new mango(1100,70,30);
	mango21=new mango(1070,40,30);

	
	treeObj=new tree(1050,580);
	stone1=new Stone(230,390,30)

	groundObject=new ground(width/2,600,width,20)
	slingshot = new SlingShot(stone1.body,{x:210, y:390});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
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
  mango12.display();
  mango13.display();
  mango14.display();
  mango15.display();
  mango16.display();
  mango17.display();
  mango18.display();
  mango19.display();
  mango20.display();
  mango21.display();

  groundObject.display();
  stone1.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x:mouseX,y:mouseY});
}


function mouseReleased(){
    slingshot.fly();
}