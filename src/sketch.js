let canvas;
let pig;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvas-container");
  canvas.position(0, 0);
  pig = loadImage("images/pd (2).png");
  canvas.style("z-index", "-1");
}

function draw() {
  background(175);
  clear();
  image(pig, mouseX, mouseY, 65, 65);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
