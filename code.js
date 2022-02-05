let colors = ['red', 'purple', 'blue', 'green', 'orange', 'yellow'];
let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');
context.scale(.3, .3);
context.translate(canvas.width, canvas.height);
for (let i = 0; i < 360; i++) {
  context.strokeStyle = colors[i % 6];
  context.lineWidth = i / 100 + 1;
  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(0, i);
  context.stroke();
  context.translate(0, i);
  context.rotate(-59 * (2 * Math.PI / 360));
}