'use strict';

const test = require('tape');
const subStrList = require('../substrlist.js');

test('test subint() with number which exists in the list', t => {
  const listOfWords = ['this', 'is', 'what', 'I\'m', 'searching', 'in'];
  const expected = 4;

  t.equal(subStrList('ching', listOfWords), expected);
  t.end();
});

test('test subint() with number which doesn\'t exist in the list', t => {
  const listOfWords = ['this', 'is', 'what', 'I\'m', 'searching', 'in'];
  const expected = -1;

  t.equal(subStrList('not', listOfWords), expected);
  t.end();
});
