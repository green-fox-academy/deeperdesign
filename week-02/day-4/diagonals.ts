'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw the canvas' diagonals.
// If it starts from the upper-left corner it should be green, otherwise it should be red.

const cvwidth: number = 600;
const cvheight: number = 400;

let coordX: number = 0;
let coordY: number = 0;

if (coordX == 0 && coordY == 0) {
    ctx.strokeStyle = 'green';
  }
  else {
    ctx.strokeStyle = 'red';
}

ctx.beginPath();
ctx.moveTo(coordX, coordY);
ctx.lineTo(cvwidth, cvheight);
ctx.stroke();
