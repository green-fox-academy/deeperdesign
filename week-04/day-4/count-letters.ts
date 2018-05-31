'use-strict';

export function countLetters(myText: string):object {
  let counter: Object = {};
  for (let i: number = 0; i < myText.length; i++) {
    let letter = myText[i];
    if (counter[letter]) {
      counter[letter]++;
    } else {
      counter[letter] = 1;
    }
  }
  return counter;
}