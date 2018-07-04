'use strict';

const app = require('./router')
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`)
});