'use strict';

let pList = document.querySelectorAll('p');

if (pList[3].classList.contains('dolphin')) {
  document.querySelector('.apple').textContent = 'pear';
}

if (pList[0].classList.contains('apple')) {
  document.querySelector('.cat').textContent = 'dog';
}

document.querySelector('.apple').classList.add('red');

document.querySelector('.balloon').setAttribute('style', 'border-radius: initial');