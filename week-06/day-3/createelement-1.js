'use strict';

const asteroidList = document.querySelector('.asteroids');

const newListItem1 = document.createElement('li');
newListItem1.textContent = 'The Green Fox';
asteroidList.appendChild(newListItem2);

const newListItem2 = document.createElement('li');
newListItem2.textContent = 'The Lamplighter';
asteroidList.appendChild(newListItem1);

const container = document.querySelector('.container');

const h1 = document.createElement('h1');
h1.textContent = 'I can add elements to the DOM!';
container.appendChild(h1);

const myImage = document.createElement('img');
myImage.setAttribute('src', 'https://www.google.com/logos/doodles/2018/world-cup-2018-day-7-5109361306238976-s.png');
container.appendChild(myImage);