'use strict';

const express = require('express');
const app = express();
const path = require('path');

//Let app use static folder
app.use('/wwwroot', express.static('wwwroot'));

//Defining root
app.get('/', (req, res) => {
  res.sendfile(path.join(__dirname, './wwwroot/index.html'));
});

//doubling endpoint
app.get('/api/doubling', (req, res) => {
  if(req.query.input) {
    res.json({
      "received": req.query.input,
      "result": req.query.input*2,
    });
  } else {
    res.json({
      "error": "Please provide an input!",
    });
  }
});

//export it for tape
module.exports = app;