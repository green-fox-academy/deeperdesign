'use-strict';

export{};

// Write a recursive function that takes one parameter: n and counts down from n.

function countDown(n: number): number {
    //this is my base case
    if (n === 0) {
      return 0;
    }
    else {
        console.log(n); //returns the current value of n
        return countDown(n - 1); //this is executed in every loop
    }
}
  
countDown(50);