'use strict'

const http = new XMLHttpRequest();
const host = 'http://localhost:3000';
const questionCont = document.querySelector('th');
const answerCont = document.querySelector('tbody');
const score = document.querySelector('h2 div');

function showRandomquestion() {
  answerCont.innerHTML = '';   //flush question container

  http.open('GET', `${host}/game`, true);
  http.onload = () => {
    const response = JSON.parse(http.responseText);
    listQandA(response);
  }
  http.send();
}

function listQandA(response) {
  questionCont.innerText = response.question;
  response.answers.forEach(element => {
    const answerItemrow = document.createElement('tr');
    const answerItemCell = document.createElement('td');

    answerItemCell.textContent = element.answer;
    answerItemCell.classList.add('answer');
    answerItemCell.setAttribute('data-correct', `${element.is_correct}`);
    answerCont.appendChild(answerItemrow);
    answerItemrow.appendChild(answerItemCell);
  });
  proceedQuiz();
}

function proceedQuiz() {
  const answerItem = document.querySelectorAll('.answer');
  answerItem.forEach(element => {
    element.addEventListener('click', () => {
      if (element.getAttribute('data-correct') === '1') {
        let points = parseInt(score.innerText);
        score.innerText = `${points + 1}`
      }
      const rightanswer = document.querySelector("td[data-correct='1']");
      const wronganswer = document.querySelectorAll("td[data-correct='0']");

      wronganswer.forEach(element => {
        element.classList.add('wrong');
      });

      rightanswer.classList.add('right');

      setTimeout(showRandomquestion, 3000)
    })
  });
};

function listAllQuestions() {
  answerCont.innerHTML = '';   //flush question container

  http.open('GET', `${host}/questions`, true);
  http.onload = () => {
    const response = JSON.parse(http.responseText);
    manageQuestions(response);
  }
  http.send();
}

function manageQuestions(response) {
  questionCont.innerText = 'Manage questions';
  response.forEach(element => {
    const questionItemrow = document.createElement('tr');
    const questionItemCell = document.createElement('td');
    const deletecell = document.createElement('td');
    const deletebutton = document.createElement('button');

    questionItemCell.textContent = element.question;
    questionItemCell.classList.add('managequestion');
    questionItemCell.setAttribute('data-qid', `${element.id}`);
    answerCont.appendChild(questionItemrow);
    questionItemrow.appendChild(questionItemCell);

    deletebutton.innerText = 'Delete';
    deletebutton.setAttribute('data-qid', `${element.id}`);

    questionItemrow.appendChild(deletecell);
    deletecell.appendChild(deletebutton);
  });
}

function deleteQestion(id){
  
}

window.onload = function () {
  if (window.location.href === host + '/' | window.location.href === host + '/') {
    showRandomquestion();
    score.innerText = '0';
  }
  if (window.location.href === host + '/managequestions' | window.location.href === host + '/managequestions/') {
    listAllQuestions();
  }
};