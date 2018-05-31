'use-strict';

declare function require(path: string): any;
const {test} = require('tape');

import {countLetters} from './count-letters';

test('count letters', t => {
    t.deepEqual(countLetters('aaabbc d d'), {a: 3, b: 2, c: 1, ' ': 2, d: 2});
    t.end();
});

test('count letters with spaces', t => {
  t.deepEqual(countLetters('aaabbcdd'), {a: 3, b: 2, c: 1, d: 2});
  t.end();
});

test('count empty string', t => {
  t.deepEqual(countLetters(''), {});
  t.end();
});
