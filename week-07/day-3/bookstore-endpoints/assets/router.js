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
  res.sendFile(path.join(__dirname, '../index.html'));
});

//Books endpoint
app.get('/api/books', (req, res) => {
  if (req.query.getdata == 'books') {
    let sql = 'SELECT book_name FROM `bookstore`.`book_mast`;';
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
  } else {
    res.sendFile(path.join(__dirname, '../index.html'));
  }
});

//required for server
module.exports = app;