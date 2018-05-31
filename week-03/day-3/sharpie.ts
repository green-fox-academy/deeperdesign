'use-strict';

class Sharpie {
  color: string;
  width: number;
  inkAmount: number;

  constructor(color: string, width: number) {
    this.color = color;
    this.width = width;
    this.inkAmount = 100;
  }

  use():number {
    this.inkAmount--;
    return this.inkAmount;
  }
}

let testsharpie1 = new Sharpie('red',30);

console.log(testsharpie1.use());