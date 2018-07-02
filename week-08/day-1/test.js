'use strict';

const test = require('tape');
const poker = require('./poker');


test('test subNum()', t => {
  const black = ['2H', '3D', '5S', '9C', 'KD'];
  const white = ['2C', '3H', '4S', '8C', 'AH'];

  t.equal(poker(black), 0, 'it is 1');
  t.equal(poker(black), 0, 'it is 1');
  t.end();
});