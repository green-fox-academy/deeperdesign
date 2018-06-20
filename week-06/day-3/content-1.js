'use strict';

const animals = document.querySelector('.animals').innerHTML;

let p = document.querySelectorAll('p');

p.forEach((e) => {
  e.innerHTML = animals;
});
