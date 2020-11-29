const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block1,block2,block3,block4,block9,block8,block7,block6,block5;
var ground1,ground2;
var polygon,polygonImg;
var sling;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    polygon=new Ball(200,200);   
   sling = new SlingShot(polygon.body,{x:170,y:200});

    stand2 = new Ground(865,310,260,5);
    
    block1 = new Brick(805,210,30,30);
    block2 = new Brick(835,210,30,30);
    block3 = new Brick(865,210,30,30);
    block4 = new Brick(895,210,30,30);
   
    block5 = new Brick(820,170,30,30);
    block6 = new Brick(850,170,30,30);
    block7 = new Brick(880,170,30,30);
    block8 = new Brick(910,170,30,30);

    block9 = new Brick(835,140,30,30);
    block10 = new Brick(865,140,30,30);
    block11 = new Brick(895,140,30,30);

    block12 = new Brick(850,100,30,30);
    block13 = new Brick(880,100,30,30);

    block14 = new Brick(865,50,30,30);

    block15 = new Brick(925,210,30,30); 
    
   
}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);

    
    stand2.display();

    polygon.display();
    sling.display();
    fill("cyan");
    block1.display();
    block2.display();   
    block3.display();
    block4.display();
    block15.display();
    fill("lightGreen");
    block5.display();
    block6.display();   
    block7.display();
    block8.display(); 
    fill("pink");
    block9.display(); 
    block10.display();
    block11.display();  
    fill("lightBlue");
    block12.display();
    block13.display();
    fill("purple");
    block14.display();

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
sling  .fly();
}