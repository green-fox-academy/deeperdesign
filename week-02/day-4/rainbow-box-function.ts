'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

const cvwidth: number = 600;
const cvheight: number = 400;

function drawThatSquare(size: number, color: string) {
  let colorsplitted:string [] = color.split('#');
  let colornumber: any = colorsplitted[1];
  function singlerect(colornumber){
    let hexcode: string = `#${colornumber}`;
    ctx.strokeStyle = hexcode;
    ctx.strokeRect(cvwidth/2-(size/2), cvheight/2-(size/2), size, size);
  }
  for (let i: number = 0; i <= cvwidth; i++) {
    colornumber -= 1000;
    size += 1;
    singlerect(colornumber);
  }
}

drawThatSquare(10, '#999999');
