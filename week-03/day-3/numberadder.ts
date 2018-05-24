'use-strict';

export{};

// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function addOne(n: number): number {
    //this is my base case
    if (n < 1) {
      return 0;
    }
    else {
        return n + addOne(n - 1);
    }
}
  
console.log(addOne(5));