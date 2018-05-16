// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

'use-strict';

declare function require(path: string): any;
const fs4 = require('fs');
let charEncoding2 = 'utf-8';

function writeMyFile3(oldName: string, newName: string) {
  let contentToCopy: string = fs4.readFileSync(oldName, charEncoding2);
  fs4.writeFileSync(newName, contentToCopy);
}
try {
  writeMyFile3('myTextfile.txt', 'myTextfile-copy.txt');
  console.log(true);
} catch (error) {
  console.log('There was an error!');
}
