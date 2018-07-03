'use strict';

const button = document.querySelector('button');


//method1
/*function showtime() {
  var timestamp = new Date();
  console.log(timestamp);
  button.removeEventListener('click',showtime);
}

button.addEventListener('click', showtime);*/

//method2
/*button.addEventListener('click', () => {
  var timestamp = new Date();
  console.log(timestamp);
  button.style = 'pointer-events: none';
});*/

//method3
function showtime() {
  var timestamp = new Date();
  console.log(timestamp);
}

button.addEventListener('click', showtime, {
  once: true 
});