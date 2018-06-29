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
})

//retrieve posts
app.get('/api/posts', (req, res) => {
  let sql = 'SELECT * FROM posts ORDER BY score DESC;';
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log('err');
      res.status(500).send();
      return;
    }
    res.status(200).json({
      posts: rows,
    });
  });
});

app.post('/api/posts', (req, res) => {
  let queryParams = [];
  let sql;

  if (req.body.owner) {
    sql = `INSERT INTO reddit.posts (title, url, owner) VALUES (?,?,?);`;
    queryParams = [req.body.title, req.body.url, req.body.owner];
  } else {
    sql = `INSERT INTO reddit.posts (title, url) VALUES (?,?);`;
    queryParams = [req.body.title, req.body.url];
  }

  conn.query(sql, queryParams, (err, rows) => {
    if (err) {
      console.log('err');
      res.status(500).send();
      return;
    }
    res.status(200).json({
      posts: rows,
    });
  });
});

//upvote
app.put('/api/posts/:id/upvote', (req, res) => {
  let postid = req.params.id;
  let rowINfo = `SELECT * FROM posts where(id = ${postid});`;
  let sql = `UPDATE reddit.posts SET vote = 1, score = score+1 WHERE (id = ${postid});`;

  conn.query(sql, (err, rows) => {
    if (err) {
      console.log('err');
      res.status(500).send();
      return;
    } else {
      conn.query(rowINfo, (err, rows) => {
        if (err) {
          console.log('err');
          res.status(500).send();
          return;
        }
        res.status(200).json({
          rows,
        });
      });
    }
  });
});

//downvote
app.put('/api/posts/:id/downvote', (req, res) => {
  let postid = req.params.id;
  let rowINfo = `SELECT * FROM posts where(id = ${postid});`;
  let sql = `UPDATE reddit.posts SET vote = -1, score = score-1 WHERE (id = ${postid});`;

  conn.query(sql, (err, rows) => {
    if (err) {
      console.log('err');
      res.status(500).send();
      return;
    } else {
      conn.query(rowINfo, (err, rows) => {
        if (err) {
          console.log('err');
          res.status(500).send();
          return;
        }
        res.status(200).json({
          rows,
        });
      });
    }
  });
});

//delete post
app.delete('/api/posts/:id', (req, res) => {
  let postid = req.params.id;
  let rowINfo = `SELECT * FROM posts where(id = ${postid});`;
  let sql = `DELETE FROM reddit.posts WHERE (id = ${postid});`;

  conn.query(rowINfo, (err, rows) => {
    if (err) {
      console.log('err');
      res.status(500).send();
      return;
    } else {
      res.status(200).json({
        rows,
      });
      conn.query(sql, (err, rows) => {
        if (err) {
          console.log('err');
          res.status(500).send();
          return;
        }
      });
    }
  });
});

//modify post
app.put('/api/posts/:id', (req, res) => {
  let postid = req.params.id;
  let rowINfo = `SELECT * FROM posts where(id = ${postid});`;
  let queryParams = [];
  let sql;

  if (req.body.title && req.body.url) { //update title and url
    sql = `UPDATE reddit.posts SET title = ?, url = ?, last_modified = CURRENT_TIMESTAMP WHERE (id = ${postid});`;
    queryParams = [req.body.title, req.body.url];
  } else if (req.body.title && !req.body.url) { //update only the title
    sql = `UPDATE reddit.posts SET title = ?, last_modified = CURRENT_TIMESTAMP WHERE (id = ${postid});`;
    queryParams = [req.body.title];
  } else if (!req.body.title && req.body.url) { //update only the url
    sql = `UPDATE reddit.posts SET url = ?, last_modified = CURRENT_TIMESTAMP WHERE (id = ${postid});`;
    queryParams = [req.body.url];
  }

  conn.query(sql, queryParams, (err, rows) => {
    if (err) {
      console.log('err');
      res.status(500).send();
      return;
    } else {
      conn.query(rowINfo, (err, rows) => {
        if (err) {
          console.log('err');
          res.status(500).send();
          return;
        }
        res.status(200).json({
          rows,
        });
      });
    }
  });
});

//required for server
module.exports = app;