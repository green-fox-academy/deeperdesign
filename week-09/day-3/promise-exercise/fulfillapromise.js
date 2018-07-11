'use strict';

let promise = new Promise((fulfill, reject) => {
  setTimeout(function(){
    const message = 'FULFILLED!';
    fulfill(message);
  }, 300);
});

promise.then((message) => {
  console.log(message);
});
