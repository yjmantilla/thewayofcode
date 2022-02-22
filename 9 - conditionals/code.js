/*How can we keep the circle inside the screen*/
var a;
var vel;
function setup() {
  // put setup code here
    createCanvas(640,480);
    a=0;
    vel = 10;
}

function draw() {
    background(100);
    circle(a, 240, 100);
    fill(0,0,0);
    a=a+vel;
}