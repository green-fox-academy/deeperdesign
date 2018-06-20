'use strict';

const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true
  }
]

const myUl = document.querySelector('ul');
const myList = document.querySelectorAll('li');

if (myList[0].textContent === 'The King') {
  myList[0].remove();
}


for (let i = 0; i < planetData.length; i++) {
  if (planetData[i].asteroid) {
    const li = document.createElement('li');
    li.textContent = planetData[i].content;
    myUl.appendChild(li);
    li.classList.add(planetData[i].category);
  }
}