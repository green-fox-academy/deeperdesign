'use strict';
// Swap the values of these variables
let a: number = 123;
let b: number = 526;

console.log(`this the old value of a:${a}`);
console.log(`this the old value of b:${b}`);

[a,b]=[b,a];

console.log(`this the new value of a:${a}`);
console.log(`this the new value of b:${b}`);