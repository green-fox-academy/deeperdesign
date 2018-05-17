'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw a green 10x10 square to the center of the canvas.

const cvwidth: number = 600;
const cvheight: number = 400;

ctx.fillStyle = 'green';
ctx.beginPath();
ctx.arc(cvwidth/2, cvheight/2, 5, 0, Math.PI*2); //it starts at 3 o clock, left,top,height,startfrom, end at context.arc(x, y, radius, startAngle, endAngle);
ctx.fill();
