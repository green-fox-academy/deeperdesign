// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

'use-strict';
declare function require(path: string): any;
const fs2 = require('fs');

function writeMyFile1(pathAndName: string, putText: string) {
  fs2.writeFileSync(pathAndName,putText);
}
try {
  writeMyFile1('myTextfile.txt', 'Gábor Koji');
  console.log('Text succefully added');
} catch (error) {
  console.log(`Unable to write file: myTextfile.txt`);
}
