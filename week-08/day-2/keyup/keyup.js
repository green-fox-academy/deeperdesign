'use strict';

const keyCodeIs = document.querySelector('h1');

window.addEventListener('keyup', (e) => {
  keyCodeIs.textContent = `Last pressed key code is: ${e.keyCode} which is letter: ${e.key}`;
});