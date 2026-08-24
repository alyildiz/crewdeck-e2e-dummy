import test from 'node:test';
import assert from 'node:assert/strict';

import { divide } from './index.js';

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
