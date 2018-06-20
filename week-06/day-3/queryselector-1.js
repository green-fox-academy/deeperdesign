'use strict';

const king = document.getElementById('b325');
console.log(king);

const businessLamp = document.querySelectorAll('.big');

businessLamp.forEach((e) => {
  console.log(e.textContent);
});

const conceitedKing = document.querySelectorAll('.container .asteroid');

conceitedKing.forEach((e) => {
  window.alert(e.textContent);
});

const noBusiness = document.querySelectorAll('div');

noBusiness.forEach((e) => {
  console.log(e.textContent);
});