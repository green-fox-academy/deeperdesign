'use strict';

const express = require('express');
const app = express();
const path = require('path');

//Let app use static folder
app.use('/wwwroot', express.static('wwwroot'));

//Defining root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './wwwroot/index.html'));
});

//doubling endpoint
app.get('/api/doubling', (req, res) => {
  if (req.query.input) {
    res.json({
      "received": req.query.input,
      "result": req.query.input * 2,
    });
  } else {
    res.json({
      error: 'Please provide an input!',
    });
  }
});

//greeter endpoint
app.get('/api/greeter', (req, res) => {
  if (req.query.name && req.query.title) {
    res.json({
      welcome_message: `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`,
    });
  } else if (!req.query.name) {
    res.json({
      error: 'Please provide a name!',
    });
  } else if (!req.query.title) {
    res.json({
      error: 'Please provide a title!',
    });
  }
});

//greeter endpoint
app.get('/api/appenda/:appendable', (req, res) => {

  let provided = false;

  if (req.params.appendable) {
    let provided = true;
    res.json({
      appended: `${req.params.appendable}a`,
    });
  }
});

app.get('/api/appenda', (req, res) => {
  res.json(404, {
    message: 'error',
  });
});

//export it for tape
module.exports = app;