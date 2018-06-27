'use strict';

require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use('/assets', express.static('assets'));

const mysql = require('mysql');
const conn = mysql.createConnection({
  host: process.env.DB_host,
  user: process.env.DB_user,
  password: process.env.DB_password,
  database: process.env.DB_database,
})


//api endpoint
app.get('/api/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

//Books api endpoint
app.get('/api/books', (req, res) => {
  let sql = 'SELECT book_name FROM book_mast;';
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log('err');
      res.status(500).send();
      return;
    }
    res.json({
      books: rows,
    });
  });
});

//Books api endpoint
app.get('/books', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});


//Books fulldata
app.get('/api/fulldata', (req, res) => {
  let sql =
  `SELECT book_mast.book_name, author.aut_name, category.cate_descrip, publisher.pub_name, purchase.purch_price
  FROM book_mast, author, category, publisher, purchase
  WHERE book_mast.aut_id = author.aut_id AND book_mast.cate_id = category.cate_id AND publisher.pub_id = book_mast.pub_id AND purchase.cate_id = category.cate_id;`;
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log('err');
      res.status(500).send();
      return;
    }
    res.json({
      booksdetailed: rows,
    });
  });
});

//required for server
module.exports = app;