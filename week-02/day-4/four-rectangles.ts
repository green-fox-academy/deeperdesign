'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.

const cvwidth: number = 600;
const cvheight: number = 400;

function moreRectangles(x: number,y: number,w: number,h: number, quantity: number, increaseSizeBy: number) {

  //color codes are limited up to 255!
  let colorcodeR: number = 13;
  let colorcodeG: number = 123;
  let colorcodeB: number = 45;

  function drawrectangle(x,y,w,h) {
    ctx.fillStyle = `rgb(${colorcodeR},${colorcodeG},${colorcodeB})`;
    ctx.fillRect(x, y, w, h);
  }
  for(let i: number = 0; i < quantity; i++) {
    colorcodeR += 5;
    colorcodeG += 2;
    colorcodeB += 30;
    x += w;
    y += h;
    w += increaseSizeBy;
    h += increaseSizeBy;
    drawrectangle(x,y,w,h);
  }
}

moreRectangles(10,10,30,30,4,10,);
