'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.

const cvwidth: number = 600;
const cvheight: number = 400;

let numberOfLines: number = 3;
let x: number = 10;
let y: number = 10;

function drawMyline(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(cvwidth/2, cvheight/2);
  ctx.strokeStyle = 'blue';
  ctx.stroke();
}

for (let i: number = 0; i < numberOfLines; i++) {
  x +=80;
  drawMyline(x,y);
}
