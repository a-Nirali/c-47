const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var bg;
var tube1,tube2,tube3,tube4,tube5;



function preload(){
  bg = loadImage("bg.jpg");
}

function setup() {
  createCanvas(1200,800);

  engine=Engine.create();
  world=engine.world;
}
function draw() {
  background(bg);  
 Engine.update(engine);
 tube= rect(250,300,70,90);
  
}
