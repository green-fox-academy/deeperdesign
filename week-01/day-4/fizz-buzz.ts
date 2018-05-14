'use strict';

// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.



for (let myMultiplicator: number = 0; myMultiplicator < 101; myMultiplicator++) {
  if (myMultiplicator === 0){
    continue;
  }
  if (myMultiplicator % 5 === 0 && myMultiplicator % 3 === 0){
    console.log('FizzBuzz');
    continue;
  }
  if (myMultiplicator % 3 === 0){
    console.log('Fizz');
    continue;
  }
  if (myMultiplicator % 5 === 0){
    console.log('Buzz');
    continue;
  }
  console.log(`${myMultiplicator}`);
}
