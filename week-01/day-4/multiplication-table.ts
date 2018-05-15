'use strict';

let number: number = 15;

// Create a program that
// prints the multiplication table with number
//
// Example:
// The number 15 should print:
//
// 1 * 15 = 15
// 2 * 15 = 30
// 3 * 15 = 45
// 4 * 15 = 60
// 5 * 15 = 75
// 6 * 15 = 90
// 7 * 15 = 105
// 8 * 15 = 120
// 9 * 15 = 135
// 10 * 15 = 150

let repeatIt: number = 10;

for (let myMultiplicator: number = 0; myMultiplicator < (repeatIt+1); myMultiplicator++) {
  if (myMultiplicator === 0){
    continue;
  }
  let result: number = myMultiplicator*number;
  console.log(`${myMultiplicator}*${number}=${result}`);
}
