'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let aOldal: number = 300;
let bOldal: number = 325;
let cOldal: number = 40;

let sUrface: number = 2*(aOldal*bOldal+bOldal*cOldal+aOldal*cOldal);
let vOlume: number = aOldal * bOldal * cOldal;

console.log(`Surface Area: ${sUrface}
Volume: ${vOlume}`
);
