'use strict';


module.exports = function (array) {
  let game = array;
  let numbers = [];
  let letters = [];
  let pairs = [];

  for (let i = 0; i < game.length; i++) {
    if (isNaN(game[i].substr(0, 1))) {
      letters.push(game[i]);
    } else {
      numbers.push(game[i]);
    }
    numbers.sort();
    for (let j = 0; j < numbers.length -1; j++) {
      if (numbers[j].substr(0, 1) === numbers[j + 1].substr(0, 1)) {
        pairs.push(numbers[j]);
        numbers.splice(j,2);
      }
    };
  };
  console.log(pairs.length);
  return pairs.length
}