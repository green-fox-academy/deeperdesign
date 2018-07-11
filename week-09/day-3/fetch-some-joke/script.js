'use strict';

const joke = document.querySelector('.joke');
const button = document.querySelector('button');

function getajoke() {
  return fetch('http://api.icndb.com/jokes/random')
  .then(response => response.json())
  .then(printjoke)
}

// const myFourthPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This promise also got resolved.');
//   }, 250);
// });

function printjoke(response) {
  joke.textContent = response.value.joke;
}

button.addEventListener('click',getajoke)