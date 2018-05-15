/*let str: string = 'This is my original string';
console.log(str.indexOf('original'));
console.log(str.indexOf('!'));
console.log(str.indexOf('is',4)); //second parameter is from where to start search
console.log(str.replace('original', 'new'));
console.log(str);

str = str.replace('original', 'new');
console.log(str);

let appleStr: string = 'apple';
console.log(appleStr.split('')); //makes an array with the letters, ''
console.log(appleStr.split(' ')); //makes an array with the letters, ' '
console.log(appleStr.split(' ', 3));

console.log(str.slice(8, 19)); //first numbers from where to slice, second number how many chars to slice
console.log(str.slice(8, -3)); //first numbers from where to slice, second number how many chars to cut from the end, counting starts form 0 from the end

console.log(str.substring(19, 8)); //similar to slice but it swaps the parameters if first is smaller than the second

console.log(str.charAt(11)); //prints the char at a given position

console.log(str.concat('I like it.'));
console.log(`${str} I like it.`); */

let car = {
  brand: 'audi',
  type: 'A6',
  color: 'blue',
  start: () => {
    console.log('WroomWroom')
  }
};
console.log(typeof car);
console.log(car);
console.log(car.type);

car.type = 'A8';
console.log(car.type);

let keyString = 'color';

console.log(car[keyString]);

console.log(Object.keys(car)); //prints the keys

console.log(car.start()); //prints the value of a key

console.log(car.hasOwnProperty('color')); //checks of key exists or not

//--------------------------------------------
