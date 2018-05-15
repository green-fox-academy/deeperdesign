'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]
let girls: string[] = ['Eve', 'Ashley', 'Bözsi', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Béla', 'Todd', 'Neef', 'Jeff'];

function makingMatches(groupOfGirls: string[], groupOfBoys: string[]) {

  let matches: string [] = [];

  if (groupOfGirls.length > groupOfBoys.length) {
    console.log(`Attention! There are ${groupOfGirls.length - groupOfBoys.length} girl without pair!`);
  }
  else if (groupOfGirls.length < groupOfBoys.length) {
    console.log(`Attention! There are ${groupOfBoys.length - groupOfGirls.length} boy without pair!`);
  }
  for (let i: number = 0; i < groupOfGirls.length; i++) {
    matches.push(`${groupOfGirls[i]} - ${groupOfBoys[i]}`);
  }

  let matchesjoined: string = matches.join(', ');

  return matchesjoined;

}

console.log(makingMatches(girls, boys));

export = makingMatches;
