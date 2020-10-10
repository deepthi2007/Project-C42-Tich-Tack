var hour,mn,sc;


function setup() {
  createCanvas(800,400);
  
  hour=hour();
  mn=minute();
  sc=second();
  console.log(hour,mn,sc);
}

function draw() {
  background(0,0,0); 
  
  angleMode(DEGREES);
   
  hourAngle = map(hour,0,12,0,360);
  mnAngle = map(mn,0,60,0,360);
  scAngle = map(sc,0,60,0,360);

  push();
  translate(400,200);
  rotate(hourAngle);
  stroke(0,250,83);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
 
  push();
  translate(400,200);
  rotate(mnAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,150,0);
  pop();

  push();
  translate(400,200);
  rotate(scAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,200,0);
  pop();

  drawSprites();
}