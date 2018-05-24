'use-strict';

export{};

// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

function earsOfBunnies(n: number): number {
    let numberOfears: number = 0;
    if (n === 0) {
      return numberOfears;
    }
    else {
        numberOfears += 2;
        return numberOfears + earsOfBunnies(n-1);
    }
}
console.log(earsOfBunnies(3));