const thumbnail = document.querySelectorAll('.thumb img');
const thumbnailContainer = document.querySelectorAll('.thumb');

let imageAlt = '';

for (let i = 0; i < thumbnail.length; i++) {
  imageAlt = thumbnail[i].getAttribute('alt');
  const imageDescription = document.createElement('div');
  thumbnailContainer[i].appendChild(imageDescription).classList.add('title');
  thumbnailContainer[i].querySelector('.title').textContent = imageAlt;
}