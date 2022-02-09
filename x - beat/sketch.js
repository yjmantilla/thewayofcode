function setup() {
  // put setup code here
    createCanvas(700,700);
    frameRate(10);
}
states = [100,100,100,100,100,200,300];
i=0;

function draw() {
    background(100);
    const rndInt = randomIntFromInterval(100, 500)
    console.log(rndInt)
    
    heart(350, 300, rndInt);
    fill(255,0,0);
    i = i+1;
}


function heart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

