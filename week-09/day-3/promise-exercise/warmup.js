'use strict';

function timed() {
  return console.log('TIMED OUT!a');
}

setTimeout(timed, 300);