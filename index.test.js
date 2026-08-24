import test from 'node:test';
import assert from 'node:assert/strict';

import { divide, greet } from './index.js';

test('divides positive numbers', () => {
  assert.equal(divide(12, 3), 4);
});

test('returns a negative result', () => {
  assert.equal(divide(-12, 3), -4);
});

test('returns a decimal quotient', () => {
  assert.equal(divide(5, 2), 2.5);
});

test('rejects division by zero', () => {
  assert.throws(
    () => divide(1, 0),
    { name: 'RangeError', message: 'Cannot divide by zero' },
  );
});

test('rejects non-finite or non-number operands', () => {
  for (const operands of [[Infinity, 2], [1, Number.NaN], ['6', 2]]) {
    assert.throws(
      () => divide(...operands),
      { name: 'TypeError', message: 'divide expects two finite numbers' },
    );
  }
});

test('greets a normal name', () => {
  assert.equal(greet('Ada'), 'Hello, Ada!');
});

test('uses custom punctuation', () => {
  assert.equal(greet('Ada', '?'), 'Hello, Ada?');
});

test('uses a custom salutation', () => {
  assert.equal(greet('Ada', '!', 'Welcome'), 'Welcome, Ada!');
});

test('combines custom punctuation and salutation', () => {
  assert.equal(greet('Ada', '?', 'Welcome'), 'Welcome, Ada?');
});

test('rejects missing or blank names', () => {
  for (const name of [undefined, null, '', '   ', 42]) {
    assert.throws(
      () => greet(name),
      { name: 'TypeError', message: 'greet expects a non-blank string' },
    );
  }
});

test('rejects missing or empty punctuation', () => {
  for (const punctuation of ['', 42, null, ['!']]) {
    assert.throws(
      () => greet('Ada', punctuation),
      { name: 'TypeError', message: 'greet expects punctuation to be a non-empty string' },
    );
  }
});

test('rejects missing or blank salutations', () => {
  for (const salutation of [null, '', '   ', 42]) {
    assert.throws(
      () => greet('Ada', '!', salutation),
      { name: 'TypeError', message: 'greet expects a non-blank salutation string' },
    );
  }
});
