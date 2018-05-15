'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"
const numbers: number[] = [1, 2, 3, 4, 5, 8];

//method1
function containsSeven(checkThisNumber: number []): string {
  let theNumberWhatIlookingfor: number = 7;
  let response: string = '';
  if (checkThisNumber.indexOf(theNumberWhatIlookingfor) >= 0){
    response = 'Hoorray it contains';
  }
  else {
    response = 'Noooooo';
  }
  return response;
};

console.log(containsSeven(numbers));
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!
export = containsSeven;
