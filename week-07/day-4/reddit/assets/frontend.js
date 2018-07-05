'use strict';

const http = new XMLHttpRequest();
const host = 'http://localhost:3000';

const newsfeed = document.querySelector('.newsfeed');


function listposts() {

  newsfeed.innerHTML = '';

  http.open('GET', `${host}/api/posts`, true);
  http.onload = () => {
    const response = JSON.parse(http.responseText);
    response.posts.forEach((element) => {

      let timestamp = new Date(element.created);
      let timestampElapsed = dateDiff(timestamp.getTime());

      const post = document.createElement('div');
      const scorecont = document.createElement('div');
      const upvote = document.createElement('div');
      const downvote = document.createElement('div');
      const score = document.createElement('div');
      const created = document.createElement('div');
      const dateelapsed = document.createElement('div');
      const datecreated = document.createElement('div');

      const postcontent = document.createElement('div');
      const postTitle = document.createElement('div');
      const imagecontainer = document.createElement('div');
      const image = document.createElement('img');

      scorecont.classList.add('scorecont');
      upvote.classList.add('upvote');
      downvote.classList.add('downvote');
      score.classList.add('score');
      postcontent.classList.add('postcontent');
      postTitle.classList.add('posttitle');
      created.classList.add('created');
      dateelapsed.classList.add('dateelapsed');
      datecreated.classList.add('datecreated');

      post.classList.add('post');
      post.classList.add(`id${element.id}`);

      newsfeed.appendChild(post);
      post.appendChild(scorecont);
      scorecont.appendChild(upvote);
      scorecont.appendChild(score).textContent = element.score;
      scorecont.appendChild(downvote);
      post.appendChild(postcontent);

      postcontent.appendChild(postTitle).textContent = element.title;
      postcontent.appendChild(imagecontainer).classList.add('imgcont');
      imagecontainer.appendChild(image).setAttribute('src', `${element.url}`)
      postcontent.appendChild(created);
      created.appendChild(datecreated).textContent = `Created: ${timestamp.toLocaleDateString()} - ${timestamp.toLocaleTimeString()}`;
      created.appendChild(dateelapsed).textContent = `Created: ${timestampElapsed}`;

    });
  }
  http.send();
}

//Elapsed time between 2 dates
//inpired by https://jsfiddle.net/RienNeVaPlus/vmhguhm3/15/
function dateDiff(timestamp) {
  var d = Math.abs(timestamp - new Date().getTime()) / 1000;
  var r = {}; //result
  var s = { //structure
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1
  };

  Object.keys(s).forEach(function (key) {
    r[key] = Math.floor(d / s[key]);
    d -= r[key] * s[key];
  });

  if (r.year >= 1) {
    return `${r.year} years ${r.month} months ${r.week} weeks ${r.day} days, ${r.hour} hours and ${r.minute} minutes ago`;
  }
  if (r.year < 1 && r.month >= 1) {
    return `years ${r.month} months ${r.week} weeks ${r.day} days, ${r.hour} hours and ${r.minute} minutes ago`;
  }
  if (r.year < 1 && r.month < 1 && r.week >= 1) {
    return `${r.week} weeks ${r.day} days, ${r.hour} hours and ${r.minute} minutes ago`;
  }
  if (r.year < 1 && r.month < 1 && r.week < 1 && r.day >= 1) {
    return `${r.day} days, ${r.hour} hours and ${r.minute} minutes ago`;
  }
  if (r.year < 1 && r.month < 1 && r.week < 1 && r.day < 1 && r.hour >= 1) {
    return `${r.hour} hours and ${r.minute} minutes ago`;
  }
  if (r.year < 1 && r.month < 1 && r.week < 1 && r.day < 1 && r.hour < 1 && r.minute >= 1) {
    return `${r.minute} minutes ago`;
  } else {
    return `${r.minute} minutes ago`;
  }
};

listposts();