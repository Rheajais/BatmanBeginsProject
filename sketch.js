

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var raindrop1, raindrop2,raindrop3,raindrop4,raindrop5,raindrop6,raindrop7,raindrop8,raindrop9,raindrop10,raindrop11,raindrop12,raindrop13,raindrop14,raindrop15,
raindrop16,raindrop17,raindrop18; 

function preload(){
    
}

function setup(){
    createCanvas(1000,1000);
    engine = Engine.create();
    world = engine.world;
    raindrop1= new Raindrops(200,200,10);
    raindrop2= new Raindrops(100,300,10);
    raindrop3= new Raindrops(500,800,10);
    raindrop4= new Raindrops(900,100,10);
    raindrop5= new Raindrops(200,700,10);
    raindrop6= new Raindrops(50,650,10);
    raindrop7= new Raindrops(200,200,10);
    raindrop8= new Raindrops(300,10,10);
    raindrop9= new Raindrops(500,500,10);
    raindrop10= new Raindrops(940,800,10);
    raindrop11= new Raindrops(409,250,10);
    raindrop12=new Raindrops(300,800,10);
    raindrop13=new Raindrops(820,450,10);
    raindrop14=new Raindrops(150,750,10);
    raindrop15=new Raindrops(650,500,10);
    raindrop16=new Raindrops(700,900,10);
    raindrop17=new Raindrops(300,950,10);
    raindrop18=new Raindrops(200,850,10);
    
}

function draw(){
    background("black");
    
    raindrop1.display();
    raindrop2.display();
    raindrop3.display();
    raindrop4.display();
    raindrop5.display();
    raindrop6.display();
    raindrop7.display();
    raindrop8.display();
    raindrop9.display();
    raindrop10.display();
    raindrop11.display();
    raindrop12.display();
    raindrop13.display();
    raindrop14.display();
    raindrop15.display();
    raindrop16.display();
    raindrop17.display();
    raindrop18.display();
    drawSprites();




}   

