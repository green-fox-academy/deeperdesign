'use strict';

const genre = document.querySelector('select[name="genre"]');
const title = document.querySelectorAll('select[name="title"] option');

genre.addEventListener('change', (e) => {
  console.log(e.target.value);

  for(let i = 0; i < title.length; i++){
    if(!title[i].classList.contains(e.target.value)) {
      title[i].classList.add('hide');
    } else {
      title[i].classList.remove('hide');
    } if(e.target.value === 'all') {
      title[i].classList.remove('hide');
    }
  }
  
});