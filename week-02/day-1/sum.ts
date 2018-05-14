'use strict';
// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

function sum(tillthisnumber: number): number {

  let myNumber: number = 0;

  for(let i: number = 1; i <= tillthisnumber; i++) {
    myNumber += i; //in every round it adds one
  }

  return myNumber;
}

console.log(sum(5));
