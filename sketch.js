
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;

var ground;
var bin;
var wall1,wall2;
var ball1;

function preload(){

	
}

function setup() {
	createCanvas(windowWidth, windowHeight - 4.5);

	engine = Engine.create();
	world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  ground = new Ground (width/2,height,2000,130);
 
  bin = createImg("bin.png");
  bin.position(width -1700,height -620);
  bin.size(1600,700);

  wall1 = new Ground (width - 450, height -140, 10, 180);
  wall2 = new Ground (width - 260, height -140, 10, 180);
    
  var ball1_options = {
    isStatic: false,
    restitution: 0.6,
    frictionAir: 0.03
    //density: 0.005

  }
  
  noStroke(0);
  fill("red")
  ball1 = Bodies.circle(width/7 ,height - 800,20,ball1_options);
  


  if (keyDown(LEFT_ARROW)) {
      ball1.x = 200;
      ball1.y = 20;
  
  }


  World.add(world,ball1);
	World.add(world,wall1);
  World.add(world,wall2);
	Engine.run(engine);
  
}


function draw() {

  background("black");
  Engine.update(engine);
  textSize(20)
  push ()
  fill("salmon")
  text("Ctrl + R to restart",width/40,60)
  pop ()

  ellipse(ball1.position.x,ball1.position.y,20);

  fill ("salmon");
  ground.display();
 
  drawSprites();

}


function keyPressed() {
  
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball1,{x:0,y:0},{x:0,y:-0.1});

  }
  
  if (keyCode === RIGHT_ARROW) {
     Matter.Body.applyForce(ball1,{x:0,y:0},{x:0.15,y:-0.05});
  }

  if (keyCode === LEFT_ARROW) {
    Matter.Body.applyForce(ball1,{x:0,y:0},{x:-0.15,y:-0.05});
 }

}

