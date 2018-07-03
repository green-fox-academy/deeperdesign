'use strict';

const button = document.querySelector('button');
const response = document.querySelector('.response');

function printText(){
  response.textContent = '2 seconds ellapsed';
}

button.addEventListener('click', () => {
  window.setTimeout(printText, 2000);
})