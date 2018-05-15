'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
let far: string[] = ['kuty', 'macsk', 'kacs', 'rók', 'halacsk'];


//method 1
function appendA(animals: string[]):string {
  let fullname: string = '';
  for (let i: number = 0; i < far.length; i++) {
    fullname += `${far[i]}a, `;
  }
  return fullname;
}

console.log(appendA(far));

// The output should be: 'kutya', 'macska', 'kacsa', 'róka', 'halacska'
export = appendA;
