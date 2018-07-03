'use strict';

const button = document.querySelector('button');
const response = document.querySelector('.response');

function listenClick() {
  let count = 0;
  button.addEventListener('click', () => {
    count += 1;
    if (count == 3) {
      response.textContent = '5 seconds elapsed and clicked 3 times';
      window.clearTimeout(listenClick);
    }
  })
}

function initListenFunction() {
  window.setTimeout(listenClick, 5000);
}

initListenFunction();