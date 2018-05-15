'use strict';

let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';

function reverse(tobeReversed: string) {
  let myLetterContainer: string = '';

  for(let i: number = 0;i<tobeReversed.length;i++) {
    myLetterContainer = reversed[i] + myLetterContainer;
  }
  console.log(myLetterContainer);
}

console.log(reverse(reversed));
