'use strict';

const express = require('express');
const app = express();
const path = require('path');

//Let app use static folder
app.use(express.json());
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

  if (req.params.appendable) {
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

//do until
app.post('/api/dountil/:what', (req, res) => {
  if (req.params.what === 'sum' && req.body.until) {
    let sum = 0;
    for (let i = 0; i <= req.body.until; i++) {
      sum += i;
    }
    res.json({
      result: sum,
    });
  }

  if (req.params.what === 'factor' && req.body.until) {
    function factorialize(num) {
      if (num === 0 || num === 1)
        return 1;
      for (var i = num - 1; i >= 1; i--) {
        num *= i;
      }
      return num;
    };
    res.json({
      result: factorialize(req.body.until),
    });
  }
  if (!req.body.until) {
    res.json({
      error: 'Please provide a number!',
    });
  }

});

app.post('/api/dountil', (req, res) => {
  res.json({
    error: 'Please provide a number!',
  });
  if (!req.params) {
    res.json({
      error: 'Please provide a number!',
    });  
  }
});

//export it for tape
module.exports = app;