'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw a green 10x10 square to the center of the canvas.

const cvwidth: number = document.querySelector('.main-canvas').width;
const cvheight: number = document.querySelector('.main-canvas').height;

class rectangle {
    width: number;
    colorR: number;
    colorG: number;
    colorB: number;
    constructor(width: number, colorR: number, colorG: number, colorB: number) {
        this.width = width;
        this.colorR = colorR;
        this.colorG = colorG;
        this.colorB = colorB;
    }
    rectanglesize1() {
        let width: number = this.width;
        let height: number = width;
        let x: number = width*(-1);
        let y: number = height;
        let iterationcountw: number = Math.ceil(cvwidth / width);
        let iterationcounth: number = Math.ceil(cvheight / height);

        ctx.fillStyle = `rgb(${this.colorR},${this.colorG},${this.colorB})`;

        function printsize1(wn: number, hn: number): any {
            if (wn <= 0 || hn <= 0) {
              return 0;
            }
            else {
                x += width*2;
                ctx.fillRect(x,y,width,height);
                console.log(wn);
                return printsize1(wn-1,hn);
            }
        }
        printsize1(iterationcountw, iterationcounth);
    }
}

function drawrectangles(w: number, r: number, g: number, b: number) {
    let pattern = new rectangle(w,r,g,b);
    pattern.rectanglesize1();
}
drawrectangles(15,200,100,70);