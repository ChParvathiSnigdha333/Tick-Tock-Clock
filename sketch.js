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
    stroke("red");
    strokeWeight(3);
    line(0,0,90,0);
    pop()

    push();
    rotate(mnAngle);
    stroke(0,255,0);
    strokeWeight(5);
    line(0,0,65,0);
    pop()

    push();
    rotate(hrAngle);
    stroke(0,0,255);
    strokeWeight(7);
    line(0,0,40,0);
    pop()

    stroke(255,0,255);
    point(0,0)

    noFill();

    //Hour hand
    stroke(0,0,255);
    strokeWeight(7);
    arc(0,0,260,260,0,hrAngle);

    //Minute hand
    strokeWeight(5);
    stroke(0,255,0);
    arc(0,0,280,280,0,mnAngle);
   
    //Second hand
    stroke(255,0,0);
    strokeWeight(3);
    arc(0,0,300,300,0,scAngle);

    drawSprites();

} 