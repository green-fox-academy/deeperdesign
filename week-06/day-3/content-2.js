'use strict';

const ul = document.querySelectorAll('li');

const newUlArray = ['apple', 'banana', 'cat', 'dog'];

for (let i = 0; i < newUlArray.length; i++) {
  ul[i].innerHTML = newUlArray[i];
}

document.querySelector('ul').classList.add('lg');