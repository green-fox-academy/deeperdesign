// Create a function that takes 3 parameters: a path, a word and a number,
// than it should write to a file.
// The path parameter should be a string, that describes the location of the file.
// The word parameter should be a string, that will be written to the file as lines
// The number paramter should describe how many lines the file should have.
// So if the word is 'apple' and the number is 5, than it should write 5 lines
// to the file and each line should be 'apple'
// The function should not raise any error if it could not write the file.

'use-strict';

declare function require(path: string): any;
const fs3 = require('fs');

function writeMyFile2(path: string, word: string, number: number) {
  let block: string = '';
  for (let i: number = 0; i < number; i++) {
    block += word+'\n';
  }
  fs3.writeFileSync(path,block);
}
try {
  writeMyFile2('myTextfile.txt', 'apple', 5);
  console.log('Text succefully added');
} catch (error) {
  
}
