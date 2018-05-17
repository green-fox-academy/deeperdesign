'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw a green 10x10 square to the center of the canvas.

const cvwidth: number = 600;
const cvheight: number = 400;

ctx.fillStyle = 'green';
ctx.fillStyle = 'red';
ctx.strokeRect(cvwidth/2-(10/2), cvheight/2-(10/2), 10, 10);
