'use-strict';

declare function require(path: string): any;
const {test} = require('tape');

import {myObject} from './apples';

test('test if method returns apple', t => {
    t.equal(myObject.getApple(),'apple');
    t.end();
});