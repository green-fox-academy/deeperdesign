'use strict';

const http = new XMLHttpRequest();
const host = 'http://localhost:3000';
const metaTitle = document.querySelector('head title');
const body = document.querySelector('body');
const findTable = document.querySelector('table');
const h1 = document.querySelector('h1');

let xmlResponse = [];

window.onload = function () {
  if (window.location.href === host + '/books' | window.location.href === host + '/books/') {
    metaTitle.textContent = 'Books';
    h1.textContent = 'Books';

    //get data books
    http.open('GET', 'http://localhost:3000/api/books/', true);
    http.onload = () => {
      xmlResponse.push(JSON.parse(http.responseText).books);
      for (let i = 0; i < xmlResponse[0].length; i++) {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        findTable.appendChild(tr).appendChild(td).textContent = xmlResponse[0][i].book_name;
      }
    }
    http.send();
  }
  if (window.location.href === host + '/api/fulldata' | window.location.href === host + '/api/fulldata/') {
    metaTitle.textContent = 'Books detailed';
    h1.textContent = 'Books detailed';

    //get data books
    http.open('GET', 'http://localhost:3000/api/fulldata/?getdata=books', true);
    http.onload = () => {
      xmlResponse.push(JSON.parse(http.responseText).booksdetailed);

    }
    http.send();
  }

}