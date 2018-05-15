'use strict';
// -  Create a function called factorio
//    that returns it's input's factorial

function factorio(tillthisnumber: number): number {

let myNumber = 1;

  for(let i: number = 1; i <= tillthisnumber; i++) {
    myNumber *= i;
  }

  return myNumber;
}

console.log(factorio(5));
