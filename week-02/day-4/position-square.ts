'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

const cvwidth: number = 600;
const cvheight: number = 400;

function squareDrawer(x: number, y: number) {
  let squaresize:number = 50;
  function drawit(x,y) {
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.arc(x+squaresize/2, y+squaresize/2, squaresize/2, 0, Math.PI*2);
    ctx.stroke();
  }
  for(let i: number = 0; i < 3; i++) {
      x += squaresize;
      drawit(x-squaresize,y);
  }
}
squareDrawer(30,50) //values should be at least 50!
