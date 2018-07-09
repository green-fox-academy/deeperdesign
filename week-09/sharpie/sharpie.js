'use strict';

function sharpie(color, width) {
  this.color = color;
  this.width = width;
  this.inkAmount = 100;

  this.use = function () {
    this.inkAmount -= this.width;
    console.log(this.inkAmount);
    return this.inkAmount
  }
};

const sharpie1 = new sharpie('red', 15);

while (sharpie1.inkAmount > sharpie1.width) {
  sharpie1.use();
}