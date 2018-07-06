'use strict';

const http = new XMLHttpRequest();
const host = 'http://localhost:3000';

const newsfeed = document.querySelector('.newsfeed');


function listposts() {

  newsfeed.innerHTML = '';   //flush newsfeed

  http.open('GET', `${host}/api/posts`, true);
  http.onload = () => {
    const response = JSON.parse(http.responseText);
    response.posts.forEach((element) => {

      console.log(element);

      let timestamp = new Date(element.created);
      let modified = new Date(element.last_modified);

      let timestampElapsed = dateDiff(timestamp.getTime());

      const postcontent = document.createElement('div');
      const postTitle = document.createElement('h2');
      const imagecontainer = document.createElement('div');
      const image = document.createElement('img');
      const post = document.createElement('div');
      const scorecont = document.createElement('div');
      const upvote = document.createElement('div');
      const downvote = document.createElement('div');
      const score = document.createElement('div');
      const postdetails = document.createElement('div');
      const created = document.createElement('div');
      const dateelapsed = document.createElement('div');
      const datecreated = document.createElement('div');
      const owner = document.createElement('div');
      const modifypost = document.createElement('div');
      const editpost = document.createElement('div');
      const deletepost = document.createElement('div');


      scorecont.classList.add('scorecont');
      upvote.classList.add('upvote');
      downvote.classList.add('downvote');
      score.classList.add('score');
      postcontent.classList.add('postcontent');
      postTitle.classList.add('posttitle');
      postdetails.classList.add('postdetails');
      created.classList.add('created');
      dateelapsed.classList.add('dateelapsed');
      datecreated.classList.add('datecreated');
      owner.classList.add('owner');
      modifypost.classList.add('modifypost');
      editpost.classList.add('editpost');
      deletepost.classList.add('deletepost');

      post.classList.add('post');
      post.setAttribute('data-postid', `${element.id}`);
      deletepost.setAttribute('data-postid', `${element.id}`);
      editpost.setAttribute('data-postid', `${element.id}`);

      newsfeed.appendChild(post);
      post.appendChild(scorecont);
      scorecont.appendChild(upvote);
      scorecont.appendChild(score).textContent = element.score;
      scorecont.appendChild(downvote);
      post.appendChild(postcontent);

      postcontent.appendChild(postTitle).textContent = element.title;
      postcontent.appendChild(imagecontainer).classList.add('imgcont');
      imagecontainer.appendChild(image).setAttribute('src', `${element.url}`)
      postcontent.appendChild(postdetails);
      postdetails.appendChild(created);
      created.appendChild(datecreated).textContent = `submitted: ${timestamp.toLocaleDateString()} - ${timestamp.toLocaleTimeString()}`;
      created.appendChild(dateelapsed).textContent = `submitted: ${timestampElapsed}`;
      created.appendChild(owner).textContent = `by: ${element.owner}`;
      postdetails.appendChild(modifypost);
      modifypost.appendChild(editpost);
      modifypost.appendChild(deletepost);

      clickclass(created);
      if (modified > timestamp) {
        const modifiedDiv = document.createElement('div');
        modifiedDiv.classList.add('modified');
        created.appendChild(modifiedDiv).textContent = `modified: ${modified.toLocaleDateString()} - ${modified.toLocaleTimeString()}`;
      }

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

function clickclass(item) {
  item.addEventListener('click', function() {
    this.classList.toggle('click');
  })
};

function scrolllistener() {
  const sidebar = document.querySelector('.sidebar');

  const sidebaroffset = sidebar.offsetTop;

  window.addEventListener('scroll', function() {
    if(window.scrollY > sidebaroffset -20){
      sidebar.classList.add('fix');
    } else {
      sidebar.classList.remove('fix');
    }
  });

}

scrolllistener();

listposts();