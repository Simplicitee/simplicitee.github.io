let q;
let ps = [];
let c = 1000;
let b;
let clickB = null;

function setup() {
  createCanvas(700, 700);
  
  b = new Boundary(width / 2, height / 2, width / 2, height / 2);
  
  for (let i = 0; i < c; i++) {
    ps[i] = new Particle(random(width), random(height));
  }
}

function draw() {
  background(0);
  
  q = new Quadtree(b, 10);
  
  for (let p of ps) {
    p.motion();
    p.color(4, 43, 156, 255);
    q.insert(p);
  }
  
  //q.show();
  
  for (let p of ps) {
    let found = [];
    q.query(p.bound, found);
    
    if (found.length > 0) {
      for (let j of found) {
        if (p != j && p.intersects(j)) {
          p.color(5, 182, 112, 0);
          j.color(5, 182, 112, 0);
          break;
        }
      }
    }
    //p.b.show(255, 0, 255);
  }
  
  if (clickB != null) {
    clickB.show(36, 182, 112);
    let found = [];
    q.query(clickB, found);
    
    text(found.length, clickB.x, clickB.y);
    
    for (let p of found) {
      p.color(6, 36, 182, 112);
    }
  }
  
  for (let p of ps) {
    p.show();
  }
}

function mouseMoved() {
  if (clickB == null) {
    clickB = new Boundary(mouseX, mouseY, 100, 100);
  } else {
    clickB.x = mouseX;
    clickB.y = mouseY;
  }
}

function mouseClicked() {
  if (clickB != null) {
    clickB.w = random(50, 200);
    clickB.h = random(50, 200);
  }
}
