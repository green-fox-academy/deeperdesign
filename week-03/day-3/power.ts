'use-strict';
export{};

// Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

function power(n: number, p: number): number {

    if (p === 0) {
      return 1;
    } else if (n === 0) {
        return 1;
    }
    else {
        return n*power(n, p-1);
    }
}
console.log(power(4,5));