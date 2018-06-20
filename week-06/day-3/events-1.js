'use strict';

const partyElement = document.querySelector('body');
const button = document.querySelector('button');

button.onclick = function () {
  partyElement.classList.toggle('party');
}