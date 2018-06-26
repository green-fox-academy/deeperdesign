'use strict';

const mapWith = (array, callback) => {
  let output = [];

  // The mapWith() function should iterate over the given array and call the callback function on every element.
  // It stores the callback return values in the output.
  // The mapWith() should return with the output array.

  for (let i = 0; i < array.length; i++) {
    output.push(callback(array[i]));
  }

  return output
}

const addOne = (number) => {
  return number + 1;
}

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]


// Exercise 2:

// Create a callback function which remove every second letter from a string

const words = ['map', 'reduce', 'filter'];

const removeSecondLetter = (words) => {
  let WordsTemp = '';
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (i % 2 == 0) {
        WordsTemp += words[i];
      };
    }
  }
  return WordsTemp;
}

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']