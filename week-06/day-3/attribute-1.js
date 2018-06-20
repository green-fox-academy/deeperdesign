'use strict';

const myImg = document.querySelector('img');

console.log(myImg.getAttribute('src'));

myImg.setAttribute('src', 'https://www.petwave.com/-/media/Images/Center/Breed/Dogs/Working-Group/Bernese-Mountain-Dog/Bernese-Mountain-Dog-puppy.ashx?w=450&hash=5688A0C466D6968BBC959E1892A6FF5A0515904D');

const myLink = document.querySelector('a');

myLink.setAttribute('href', 'https://www.greenfoxacademy.com');

const myButton = document.querySelector('.this-one');

myButton.textContent = `Don't click me!`;

myButton.setAttribute('disabled', '');