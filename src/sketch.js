let canvas;
let pig;
let mouseFollower;

function preload() {
  pig = loadImage("images/pd (2).png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvas-container");
  canvas.position(0, 0);
  canvas.style("z-index", "-1");

  mouseFollower = createImg("images/pd (2).png");
  mouseFollower.size(65, 65);
  mouseFollower.position(0, 0);
  mouseFollower.style("pointer-events", "none");
  mouseFollower.style("z-index", "9999");
  mouseFollower.style("border", "none");
}

function draw() {
  mouseFollower.position(mouseX, mouseY);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
