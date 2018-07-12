'use strict';

require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

//assets folder
app.use('/assets', express.static('assets'));

//MySQL connection
const mysql = require('mysql');
const conn = mysql.createConnection({
  host: process.env.DB_host,
  user: process.env.DB_user,
  password: process.env.DB_password,
  database: process.env.DB_database,
});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//render the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/game.html'));
});

//retreive a random question with its answers
app.get('/game', (req, res) => {
  const sqlQestion = `SELECT * FROM questions;`;

  conn.query(sqlQestion, (err, rows1) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }

    const randomQ = rows1[getRandomInt(rows1.length)];
    const sqlQestion = `SELECT *
    FROM questions, answers
    WHERE questions.id = ${randomQ.id} AND answers.question_id = ${randomQ.id};`;

    conn.query(sqlQestion, (err, rows2) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;
      }
      let answers = [];

      rows2.forEach(element => {
        answers.push(
          {
            answer: element.answer,
            is_correct: element.is_correct
          }
        )
      });

      let quiz = {
        Qid: rows2[0].question_id,
        question: rows2[0].question,
        answers: answers,
      }

      res.status(200).json(
        quiz
      );
    });
  });

});

//retreive all questions
app.get('/questions', (req, res) => {
  const sqlQestion = `SELECT * FROM questions;`;

  conn.query(sqlQestion, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }

    res.status(200).json(
      rows
    );

  });

});

//render the main page
app.get('/managequestions', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/manage.html'));
});

//post a question
app.post('/questions', (req, res) => {

});

//delete by id
app.delete('/questions/:id', (req, res) => {
  let postid = req.params.id;
  let rowINfo = `DELETE questions , answers FROM questions INNER JOIN answers  
  WHERE questions.id= answers.question_id and questions.id = ${postid};`;

  conn.query(rowINfo, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.status(200).json({
      rows,
    });
  });
});

//required for server
module.exports = app;