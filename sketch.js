
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  World = engine.world;

  Engine.run(engine)
  object1=Bodies.circle(200,200,50,{isStatic: true})
  World.add(world, object1)

  object2=Bodies.rectangle(200,200,50,50)
  World.add(world, object2)

}
function draw()
{
  background(0);
  rectMode(CENTER);
    circle(200,200,50);
    rect(object1.postion.x,object1.position.y,50,50);
  
}
