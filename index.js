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
 * @param {string} [punctuation='!'] The punctuation to end the greeting with.
 * @param {string} [salutation='Hello'] The salutation to start the greeting with.
 * @returns {string} The greeting `<salutation>, <name><punctuation>`.
 * @throws {TypeError} If the name is not a non-blank string.
 * @throws {TypeError} If the punctuation is not a non-empty string.
 * @throws {TypeError} If the salutation is not a non-blank string.
 */
export function greet(name, punctuation = '!', salutation = 'Hello') {
  if (typeof name !== 'string' || name.trim() === '') {
    throw new TypeError('greet expects a non-blank string');
  }

  if (typeof punctuation !== 'string' || punctuation === '') {
    throw new TypeError('greet expects punctuation to be a non-empty string');
  }

  if (typeof salutation !== 'string' || salutation.trim() === '') {
    throw new TypeError('greet expects a non-blank salutation string');
  }

  return `${salutation}, ${name}${punctuation}`;
}
