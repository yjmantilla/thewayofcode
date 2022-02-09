function setup() {
  // put setup code here
    createCanvas(640,480);
}
i=0;
function draw() {
    background(100);
    avance=64;
    // for(i=0;i<10;i++){
        // console.log(i);
        // circle(i*avance, 240, 34);
    // }
    circle(i*avance, 240, 34);
    fill(0,0,0)
    i=i+avance;
    // if (i > 640){
    // i=i%640;
    // }
}