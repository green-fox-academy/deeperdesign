'use-strict';

declare function require(path: string): any;
const {test} = require('tape');

import {anaGram} from './anagram';

test('matcing anagrams', t => {
    t.equal(anaGram('termelékenység','Megkéselt erény'),true);
    t.end();
});

test('unmatching anagrams', t => {
  t.equal(anaGram('termeléknység kalapács','Megkéselt erény'),false);
  t.end();
});

test('one variable is missing', t => {
  t.equal(anaGram('','Megkéselt erény'),false);
  t.end();
});

test('no variables given', t => {
  t.equal(anaGram(),false);
  t.end();
});