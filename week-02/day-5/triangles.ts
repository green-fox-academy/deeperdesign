'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const cvwidth: number = 600;
const cvheight: number = 600;
let multiplicator: number = -1;

function drawMytriangles(trianglesize: number) {
  //line from left to right
  function linFromLeftToRight() {
    ctx.beginPath();
    ctx.moveTo((cvwidth/2)+((trianglesize/2)*multiplicator), (trianglesize*multiplicator));
    ctx.lineTo((trianglesize*multiplicator), cvheight);
    ctx.strokeStyle = '#000';
    ctx.stroke();
  }

  //line from right to left
  function linFromRightToLeft() {
    ctx.beginPath();
    ctx.moveTo((cvwidth/2)-((trianglesize/2)*multiplicator), (trianglesize*multiplicator));
    ctx.lineTo(cvwidth-(trianglesize*multiplicator), cvheight);
    ctx.strokeStyle = '#000';
    ctx.stroke();
  }

  //horizontalLine
  function horizontalLine() {
    ctx.beginPath();
    ctx.moveTo((cvwidth/2)-(trianglesize/2)*multiplicator, trianglesize*multiplicator);
    ctx.lineTo((cvwidth/2)+(trianglesize/2)*multiplicator, trianglesize*multiplicator);
    ctx.strokeStyle = '#000';
    ctx.stroke();
  }

  //run functions multiple times
  for (let i: number = 0; i < cvwidth; i++) {
    multiplicator += 1;
    linFromLeftToRight();
    linFromRightToLeft();
    horizontalLine();
  }
}
drawMytriangles(15);
