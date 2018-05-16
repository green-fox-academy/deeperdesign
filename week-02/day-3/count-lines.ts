// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.
'use-strict';

declare function require(path: string): any;
const fs1 = require('fs');
let charEncoding1 = 'utf-8';

function readMyFile1(pathAndName: string) {
  let getcontent:string [] = fs1.readFileSync(pathAndName, charEncoding1).split('\r\n');
  console.log(getcontent.length);
}
try {
  readMyFile1('myTextfile.txt');
} catch (error) {
  console.log(0);
}
