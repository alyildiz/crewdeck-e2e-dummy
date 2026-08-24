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

/**
 * Build a greeting for a name.
 *
 * @param {string} name The name to greet.
 * @returns {string} The greeting `Hello, <name>!`.
 * @throws {TypeError} If the argument is not a non-blank string.
 */
export function greet(name) {
  if (typeof name !== 'string' || name.trim() === '') {
    throw new TypeError('greet expects a non-blank string');
  }

  return `Hello, ${name}!`;
}
