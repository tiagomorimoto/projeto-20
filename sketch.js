const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var quad;
var rec;

function setup() {
  createCanvas(600,600);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = 
   {
    restitution: 0.5,
    friction:0.02,
    frictionAir:0
   }
   
   var ground_options =
   {
     isStatic: true
   };
  
   var quad_options = 
   {
    restitution: 0.7,
    friction:0.01,
    frictionAir:0.1
   }

   var retan_options =
   {
    restitution:0.01,
    friction:1,
    frictionAir:0.3
   }

  ground = Bodies.rectangle(300,490,700,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  rec = Bodies.rectangle(150, 10, 10, 10, retan_options);
  World.add(world,rec);

  quad = Bodies.rectangle(350,50,10,10, quad_options);
  World.add(world,quad);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(47,79,79);
  Engine.update(engine); 
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(rec.position.x,rec.position.y,30,60);
  rect(quad.position.x,quad.position.y,30,30);
  rect(ground.position.x,ground.position.y,600,20); 
}