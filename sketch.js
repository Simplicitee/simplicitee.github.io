class Color {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
}

let colors = [new Color(252, 186, 3), new Color(36, 182, 112), new Color(255, 82, 82), new Color(7, 85, 182), new Color(107, 31, 237), new Color(207, 70, 251)];

class Circle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.color = colors[floor(random(6))];
    this.size = 0;
  }
  
  update() {
    if (this.size < 800) {
      strokeWeight(0);
      fill(this.color.r, this.color.g, this.color.b, 200);
      circle(this.x, this.y, this.size++);
    }
  }
}

let circles = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(0);
  let c = new Circle();
  if (random(10) > 9) {
    circles.push(c);
  }
  
  for (let i = 0; i < circles.length; i++) {
    circles[i].update();
  }
  
  if (circles.length > 100) {
    circles.shift();
  }
}
