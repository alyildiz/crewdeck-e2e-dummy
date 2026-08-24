# divide

A minimal ESM utility for predictable numeric division.

```js
import { divide, greet } from 'divide';

divide(6, 4); // 1.5
greet('Ada'); // 'Hello, Ada!'
```

## `divide(a, b)`

Returns `a / b` when both arguments are finite JavaScript numbers and `b` is non-zero. It throws a `TypeError` for non-number or non-finite arguments and a `RangeError` with the message `Cannot divide by zero` when `b` is `0` or `-0`.

## `greet(name, punctuation = '!')`

Returns `Hello, <name><punctuation>` when `name` is a non-blank string and `punctuation` is a non-empty string (defaulting to `!`). It throws a `TypeError` with the message `greet expects a non-blank string` for missing, non-string, or blank input, and a `TypeError` with the message `greet expects punctuation to be a non-empty string` for missing or empty punctuation.

Run the tests with `npm test`.
