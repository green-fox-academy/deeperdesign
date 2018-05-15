'use strict';
// -  Create a string variable named `typo` and assign the value `kuty` to it
// -  Write a function called `appendA` that gets a string as an input,
//    appends an 'a' character to its end and returns with a string
// -  Print the result of `appendAFunc(typo)`

function appendA(typo: string, chartoAdd: string='a') {
  console.log(`${typo}${chartoAdd}`)
}
appendA('kuty');


function appendA2(typo: string) {
  let typeWithA = typo + 'a';
  console.log(typeWithA);
}
appendA2('kuty');
