
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.a = (x + y) * (x - y) * (x + x) * (y + y);
    this.bound = new Boundary(x, y, 2, 2);
    this.size = 0;
    this.r = 0;
    this.g = 0;
    this.b = 0;
  }
  
  show() {
    stroke(this.r, this.g, this.b);
    strokeWeight(this.size);
    point(this.x, this.y);
  }
  
  motion() {
    let r = map(noise(this.a), 0, 1, -3, 3);
    this.x += cos(this.a) * r;
    this.y += sin(this.a) * r;
    
    if (this.x > width - 10) {
      this.x = width - 10;
      this.a = (this.x + this.y) * (this.x - this.y) + random();
    } else if (this.x < 10) {
      this.x = 10;
      this.a = (this.x + this.y) * (this.x - this.y) + random();
    }
    
    if (this.y > height - 10) {
      this.y = height - 10;
      this.a = (this.x + this.y) * (this.x - this.y) + random();
    } else if (this.y < 10) {
      this.y = 10;
      this.a = (this.x + this.y) * (this.x - this.y) + random();
    }
    
    this.bound.x = this.x;
    this.bound.y = this.y;
    this.a += 0.01;
  }
  
  color(size, r, g, b) {
    this.size = size;
    this.r = r;
    this.g = g;
    this.b = b;
  }
  
  intersects(other) {
    return this.bound.intersects(other.bound);
  }
}
