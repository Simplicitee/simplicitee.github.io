class Quadtree {
  constructor(boundary, capacity) {
    this.boundary = boundary;
    this.capacity = capacity;
    this.size = 0;
    this.ps = [];
    this.divided = false;
    this.northeast = null;
    this.northwest = null;
    this.southeast = null;
    this.southwest = null;
  }
  
  insert(particle) {
    if (!this.boundary.contains(particle)) {
      return false;
    }
    
    if (this.size + 1 <= this.capacity) {
      this.ps[this.size++] = particle;
    } else {
      if (!this.divided) {
        this.subdivide();
      }
      
      this.northeast.insert(particle);
      this.northwest.insert(particle); 
      this.southeast.insert(particle); 
      this.southwest.insert(particle);
    }
    
    return true;
  }
  
  subdivide() {
    this.divided = true;
    let ne = new Boundary(this.boundary.x + this.boundary.w/2, this.boundary.y + this.boundary.h/2, this.boundary.w/2, this.boundary.h/2);
    let nw = new Boundary(this.boundary.x - this.boundary.w/2, this.boundary.y + this.boundary.h/2, this.boundary.w/2, this.boundary.h/2);
    let se = new Boundary(this.boundary.x + this.boundary.w/2, this.boundary.y - this.boundary.h/2, this.boundary.w/2, this.boundary.h/2);
    let sw = new Boundary(this.boundary.x - this.boundary.w/2, this.boundary.y - this.boundary.h/2, this.boundary.w/2, this.boundary.h/2);
    this.northeast = new Quadtree(ne, this.capacity);
    this.northwest = new Quadtree(nw, this.capacity);
    this.southeast = new Quadtree(se, this.capacity);
    this.southwest = new Quadtree(sw, this.capacity);
    
    for (let p of this.ps) {
      this.northeast.insert(p);
      this.northwest.insert(p);
      this.southeast.insert(p);
      this.southwest.insert(p);
    }
    
    this.ps = [];
  }
  
  show() {
    if (this.divided) {
      this.northeast.show();
      this.northwest.show();
      this.southeast.show();
      this.southwest.show();
    } else {
      this.boundary.show(255, 255, 255);
      textSize(14);
      text("" + this.size, this.boundary.x, this.boundary.y);
    }
  }
  
  query(range, found) {
    if (!this.boundary.intersects(range)) {
      return;
    }
    
    if (this.divided) {
      this.northeast.query(range, found);
      this.northwest.query(range, found);
      this.southeast.query(range, found);
      this.southwest.query(range, found);
    } else {
      for (let p of this.ps) {
        if (range.contains(p)) {
          found.push(p);
        }
      }
    }
  }
}

class Boundary {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  
  contains(particle) {
    return particle.x >= this.x - this.w && particle.x <= this.x + this.w && particle.y >= this.y - this.h && particle.y <= this.y + this.h;
  }
  
  intersects(range) {
    let a = range.x - range.w > this.x + this.w;
    let b = range.x + range.w < this.x - this.w;
    let c = range.y - range.h > this.y + this.h;
    let d = range.y + range.h < this.y - this.h;
    return !(a || b || c || d);
  }
  
  show(r, g, b) {
    rectMode(CENTER);
    noFill();
    stroke(r, g, b);
    strokeWeight(1);
    rect(this.x, this.y, this.w * 2, this.h * 2);
  }
}
