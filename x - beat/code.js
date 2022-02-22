/*Can you make a heart with Tachycardia or arritmia*/
function setup() {
  // put setup code here
    createCanvas(700,700);
    frameRate(10);
}

states = [100,100,100,100,100,200,100,100,300];
i=0;
function draw() {
    background(255);
    heart(350, 300, states[i]);
    fill(255,0,0);
    i = i+1;
    if (i==states.length)
    {
      i = 0;
    }
}


function heart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}