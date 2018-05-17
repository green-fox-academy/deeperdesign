'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

const cvwidth: number = 600;
const cvheight: number = 400;

function moreRectangles(x: number,y: number,w: number,h: number, quantity: number) {
  let originalX = x;
  let originalY = y;

  function drawrectangle(x,y,w,h) {
    ctx.fillStyle = 'purple';
    ctx.fillRect(x, y, w, h);
  }
  for(let i: number = 0; i < quantity; i++) {
    x += w;
    y += h;
    w += w;
    h += h;
    drawrectangle(x-originalX,y-originalY,w,h);
  }
}

moreRectangles(2,2,4,4,10,);
