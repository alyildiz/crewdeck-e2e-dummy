/**
 * Divide one finite number by another.
 *
 * @param {number} a Dividend.
 * @param {number} b Non-zero divisor.
 * @returns {number} The quotient of a and b.
 * @throws {TypeError} If either argument is not a finite number.
 * @throws {RangeError} If the divisor is zero.
 */
export function divide(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new TypeError('divide expects two finite numbers');
  }

  if (b === 0) {
    throw new RangeError('Cannot divide by zero');
  }

  return a / b;
}
