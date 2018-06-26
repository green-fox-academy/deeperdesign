'use strict';

setTimeout(() => printText('Apple'), 0);
setTimeout(() => printText('Pear'), 1000);
setTimeout(() => printText('Melon'), 3000);
setTimeout(() => printText('Grapes'), 5000);

function printText(name) {
  console.log(`${name}`);
}

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds