/* The code provided is a test case written in JavaScript using the Jest testing framework. */
/* eslint-env node */

const sum = require('../sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});