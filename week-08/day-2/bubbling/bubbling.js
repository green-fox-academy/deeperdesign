'use strict';

const nav = document.querySelector('nav');
const image = document.querySelector('.img-inspector');

document.addEventListener("DOMContentLoaded", function (event) {

});

nav.addEventListener('click', function (e) {
  if (e.target.dataset.action === 'move') {
    let imgStyle = window.getComputedStyle(image);
    let currentpositionX = parseInt(imgStyle.backgroundPositionX);
    let currentpositionY = parseInt(imgStyle.backgroundPositionY);

    if (e.target.dataset.direction === 'up') {
      console.log('moveup');
      image.style.backgroundPositionY = `${currentpositionY - 10}px`;
    }

    if (e.target.dataset.direction === 'down') {
      console.log('movedown');
      image.style.backgroundPositionY = `${currentpositionY + 10}px`;
    }

    if (e.target.dataset.direction === 'left') {
      console.log('moveleft');
      image.style.backgroundPositionX = `${currentpositionX - 10}px`;
    }

    if (e.target.dataset.direction === 'right') {
      console.log('moveright');
      image.style.backgroundPositionX = `${currentpositionX + 10}px`;
    }
  }

  if (e.target.dataset.action === 'zoom') {
    let imgStyle = window.getComputedStyle(image);
    let currentzoom = parseInt(imgStyle.backgroundSize);

    if (e.target.dataset.direction === 'in') {
      image.style.backgroundSize = `${currentzoom + 20}%`;
    }

    if (e.target.dataset.direction === 'out') {
      currentzoom = Math.max(100, currentzoom - 20);
      image.style.backgroundSize = `${currentzoom}%`;
    }
  }
});
