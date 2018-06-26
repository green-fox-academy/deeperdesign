'use strict'

const http = new XMLHttpRequest();
http.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=4ZfRhbZySqcdDUzmNxx8ttpDF630H1SU&q=trump&limit=16&offset=0&rating=G&lang=en');
http.onload = () => {
  const response = JSON.parse(http.responseText);
  const container = document.querySelector('.pics');

  response.data.forEach((element) => {

    const div = document.createElement('div');
    const img = document.createElement('img');

    img.src = element.images.fixed_width_still.url;
    img.addEventListener('click', () => {
      img.setAttribute('src', element.images.fixed_width.url);
    })

    container.appendChild(img);
  });
}

const button = document.querySelector('#getimages');
button.addEventListener('click', () => {
  http.send(); //what we did previousli do it again
});