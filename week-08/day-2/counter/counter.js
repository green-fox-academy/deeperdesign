'use strict';

const button = document.querySelector('button');

button.addEventListener('click', () => {
  let list = document.querySelectorAll('li');
  const result = document.querySelector('.result');
  result.textContent = `There are ${list.length} items in the list`;
});