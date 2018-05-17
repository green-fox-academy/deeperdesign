'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// draw a box that has different colored lines on each edge.

const cvwidth: number = 600;
const cvheight: number = 400;

ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(150, 10);
ctx.strokeStyle = 'blue';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150, 10);
ctx.lineTo(150, 150);
ctx.strokeStyle = 'red';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150, 150);
ctx.lineTo(10, 150);
ctx.strokeStyle = 'black';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(10, 150);
ctx.lineTo(10, 10);
ctx.strokeStyle = 'green';
ctx.stroke();
