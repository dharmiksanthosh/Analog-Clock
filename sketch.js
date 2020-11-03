var h,m,s,hangle,mangle,sangle;

function setup() {
  createCanvas(700,600);

  angleMode(DEGREES);
}

function draw() {
  background(0);  

  h = hour();
  m = minute();
  s = second();

  sangle = map(s,0,60,0,360);
  mangle = map(m,0,60,0,360);
  hangle = map(h,0,12,0,360);

  strokeWeight(20);
  noFill();

  stroke("blue");
  arc(350, 300, 400, 400, 270, sangle);

  stroke("green");
  arc(350, 300, 450, 450, 270, mangle);

  stroke("red");
  arc(350, 300, 500, 500, 270, hangle);

}