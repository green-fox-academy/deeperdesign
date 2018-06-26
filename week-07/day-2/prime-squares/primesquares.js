'use strict';

const section = document.querySelector('section');

for (let i = 2; i <= 100; i++) {
  const div = document.createElement('div');
  div.textContent = i;
  section.appendChild(div);
}

function isPrime(value) {
  for (var i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
}

function addClass(currentEl, classname) {
  currentEl.classList.add(classname);
}

const numbersInDivs = document.querySelectorAll('section div');


for (let i = 0; i < numbersInDivs.length; i++) {
  if (isPrime(numbersInDivs[i].innerHTML) == 0) {
    setTimeout(() => addClass(numbersInDivs[i], 'not-prime'), 100);
  } else {
    setTimeout(() => addClass(numbersInDivs[i], 'prime'), 100);
  }
}


/*numbersInDivs.forEach((element) => {
  if (isPrime(element.innerHTML) == 0) {
    setTimeout(() => addClass(element, 'not-prime'), 100);
  } else {
    setTimeout(() => addClass(element, 'prime'), 100);
  }
});*/