'use-strict';

declare function require(path: string): any;
const {test} = require('tape');

import {myClass} from './sum';

test('test addup numbers', t => {
    let mylist = new myClass([1,1,3,5]);
    t.equal(mylist.sum(),10);
    t.end();
});

test('what happens if my list is empty', t => {
    let mylist = new myClass([]);
    t.equal(mylist.sum(),null);
    t.end();
});

test('test case with one number', t => {
    let mylist = new myClass([6]);
    t.equal(mylist.sum(),6);
    t.end();
});

test('test case with null', t => {
    let mylist = new myClass([null]);
    t.equal(mylist.sum(),undefined);
    t.end();
});

test('test case with strings', t => {
    let mylist = new myClass(['abc','c']);
    t.equal(mylist.sum(),'abcc');
    t.end();
});