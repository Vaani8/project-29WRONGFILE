const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25

function setup() {
  createCanvas(1190,700);
  engine = Engine.create();
    world = engine.world;
  
  block1= new Block(600, 200, 35, 60);
  //block1.shapeColor="pink";
  block2= new Block(600, 260, 35, 60);
  block3= new Block(635, 260, 35, 60);
  block4= new Block(565, 260, 35, 60);
  block5= new Block(600, 320, 35, 60);
  block6= new Block(635, 320, 35, 60);
  block7= new Block(565, 320, 35, 60);
  block8= new Block(670, 320, 35, 60);
  block9= new Block(530, 320, 35, 60);
  block10= new Block (600, 380, 35, 60);
  block11=new Block (500, 200, 35, 60);
  block12=new Block (500, 200, 35, 60);
  block13=new Block (500, 200, 35, 60);
  block14=new Block (500, 200, 35, 60);
  block15=new Block (500, 200, 35, 60);
  block16=new Block (500, 200, 35, 60);
  block17=new Block (500, 200, 35, 60);
  block18=new Block (500, 200, 35, 60);
  block19=new Block (500, 200, 35, 60);
  block20=new Block (500, 200, 35, 60);
  block21=new Block (500, 200, 35, 60);
  block22=new Block (500, 200, 35, 60);
  block23=new Block (500, 200, 35, 60);
  block24=new Block (500, 200, 35, 60);
  block25=new Block (500, 200, 35, 60);
}

function draw() {
  background(0);  
  Engine.update(engine);
    console.log(block1.positionX);
    console.log(block1.positionY);
    //console.log(block1.body.angle);

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  
  
}