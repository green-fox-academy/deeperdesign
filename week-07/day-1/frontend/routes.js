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

//export it for tape
module.exports = app;