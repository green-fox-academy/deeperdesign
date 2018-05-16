// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'
'use-strict';

declare function require(path: string): any;
const fs = require('fs');
let charEncoding = 'utf-8';

function readMyFile(pathAndName: string) {
  try {
    return fs.readFileSync(pathAndName, charEncoding);
  } catch (error) {
    console.log(error.message);
    console.log(`Unable to read file: myTextfile.txt`);
    return null;
  }
}

console.log(readMyFile('myTextfile.txt'));
