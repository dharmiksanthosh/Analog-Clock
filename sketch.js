var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function setup(){
    createCanvas(400,400); 
    angleMode(DEGREES);   
}

function draw(){
    background(0);

    translate(200,200)
    rotate(-90)

    hr = hour();
    mn = minute();
    sc = second();

    scAngle = map(sc, 0, 60, 0, 360);
    mnAngle = map(mn,0,60,0,360)
    hrAngle = map(hr % 12,0,12,0,360)

    push();
    rotate(scAngle);
    stroke(200,0,0);
    strokeWeight(7);
    line(0,0,50,0);
    pop()

    push();
    rotate(mnAngle);
    stroke("green");
    strokeWeight(7);
    line(0,0,100,0);
    pop()

    push();
    rotate(hrAngle);
    stroke(0,0,200);
    strokeWeight(7);
    line(0,0,70,0);
    pop()

    stroke("yellow");
    point(0,0)

    strokeWeight(10);
    noFill();

    stroke(0,0,200);
    arc(0,0,300,300,0,hrAngle);

    stroke("green");
    arc(0,0,280,280,0,mnAngle);
    
    stroke(200,0,0);
    arc(0,0,260,260,0,scAngle);
}
