'use strict';

const form = document.querySelector('form');
const input = document.querySelectorAll('input');
const input1 = document.querySelectorAll('input[name="pet"]');
const input2 = document.querySelectorAll('input[name="catfacts"]');
const signup = document.querySelector('button[name="signup"]');
const love = document.querySelector('button[name="love"]');
const div = document.createElement('div');

function listenInputChange() {
  let fish = false;
  for (let i = 0; i < input1.length; i++) {
    input1[i].addEventListener('click', function () {
      if (this.value === 'cat') {
        signup.removeAttribute('disabled');
        love.removeAttribute('disabled');
      } else if (this.value === 'fish') {
        fish = true;
        signup.setAttribute('disabled', '');
        love.setAttribute('disabled', '');
      }
      else if (this.value === 'dog') {
        signup.removeAttribute('disabled');
        love.setAttribute('disabled', '');
      } else {
        signup.setAttribute('disabled', '');
        love.setAttribute('disabled', '');
        fish = false;
      }
    });
  };
  for (let i = 0; i < input2.length; i++) {
    input2[i].addEventListener('click', function () {
      if (this.value === 'yes') {
        signup.removeAttribute('disabled');
        if (form.contains(div)) {
          form.removeChild(div);
        }
      } else if (this.value === 'no' && fish == true) {
        form.appendChild(div).textContent = 'Sigh, we still added you to the cat facts list';
        signup.removeAttribute('disabled');
      } else {
        signup.setAttribute('disabled', '');
        form.removeChild(div);
      }
    })
  }
}

listenInputChange();
