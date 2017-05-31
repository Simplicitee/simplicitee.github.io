window.onload=function() {
  c=document.getElementById("game");
  ctx=c.getContext("2d");
  document.addEventListener("keydown", keypress);
  setInterval(game, 1000/15);
}

tc=20
px=py=10;
gx=gy=Math.floor(Math.random()*tc);
vx=vy=0;

function game() {
  px+=vx;
  py+=vy;

  if (px >= tc-1 || px <= 1) {
    vx=0;
  }

  if (py >= tc-1 || py <= 1) {
    vy=0;
  }

  gx+=(px-gx)/gx;
  gy+=(py-gy)/gy;

  if (gx==px && gy==py) {
    reset();
  }

  for (x=0; x<canv.width; x++) {
    for (y=0; y<canv.height; y++) {
      if ((x==0 || x==canv.width) && (y==0 || y==canv.height)) {
        ctx.fillStyle="blue";
        ctx.fillRect(x*tc, y*tc, tc-2, tc-2);
        if (border[i].x==px && border[i].y==py) {
          reset();
        }
      }
    }
  }

  ctx.fillStyle="black";
  ctx.fillRect(0, 0, canv.width, canv.height);

  ctx.fillStyle="yellow";
  ctx.fillRect(px, py, tc-2, tc-2);
}

function reset() {
  px=py=10;
  gx=gy=Math.floor(Math.random()*tc);
  vx=vy=0;
}

function keypress(evt) {
  switch(evt.keyCode) {
      case 37:
          xv=-1;
          break;
      case 38:
          yv=-1;
          break;
      case 39:
          xv=1;
          break;
      case 40:
          yv=1;
          break;
  }
}
