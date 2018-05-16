'use-strict';
// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divide(a: number, b: number) {
  if (b === 0) {
    throw new Error(`Can't divide by 0`);
  }
  return a / b;
}

try {
  console.log(divide(10,0));
} catch(error) {
  console.log(error);
} finally {
  console.log('This is always run');
}
