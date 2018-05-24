'use-strict';

export{};

// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.


function replaceSmallXwithSmallY(myTextwithX: string): string {
    let replaced: string = myTextwithX.replace('x', 'y');
    if (myTextwithX.indexOf('x') === -1) {
      return replaced;
    }
    else {
        return replaceSmallXwithSmallY(replaced);
    }
}
console.log(replaceSmallXwithSmallY('drxisthebextfefkxofx'));
