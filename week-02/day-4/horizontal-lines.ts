'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// draw 3 lines with that function. Use loop for that.

const cvwidth: number = 600;
const cvheight: number = 400;

let x: number = 100;
let y: number = 100;
let numberOflines: number = 3;

function drawMyline(x, y) {
  function drawlineDuplicator(y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x+50, y);
    ctx.strokeStyle = 'blue';
    ctx.stroke();
  }
  for(let i: number = 0; i < numberOflines; i++) {
    y += 10;
    drawlineDuplicator(y);
  }
}

drawMyline(x,y);
