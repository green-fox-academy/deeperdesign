'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// draw a red horizontal line to the canvas' middle.
// draw a green vertical line to the canvas' middle.


const cvwidth: number = 600;
const cvheight: number = 400;

ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo((cvwidth/2)-10, 10);

ctx.strokeStyle = 'red';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(10, (cvheight/2)-10);

ctx.strokeStyle = 'green';
ctx.stroke();
