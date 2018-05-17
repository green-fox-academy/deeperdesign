'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

const cvwidth: number = 600;
const cvheight: number = 400;

function drawThatSquare(size: number) {
  function singleSquare(size) {
    ctx.fillStyle = 'red';
    ctx.strokeRect(cvwidth/2-(size/2), cvheight/2-(size/2), size, size);
  }
  for (let i: number = 0; i < 3; i++) {
    size += 10;
    singleSquare(size-10);
  }
}

drawThatSquare(30);
