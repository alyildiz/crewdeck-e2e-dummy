# divide

A minimal ESM utility for predictable numeric division.

```js
import { divide, greet } from 'divide';

divide(6, 4); // 1.5
greet('Ada'); // 'Hello, Ada!'
greet('Ada', 'Welcome'); // 'Welcome, Ada!'
```

## `divide(a, b)`

Returns `a / b` when both arguments are finite JavaScript numbers and `b` is non-zero. It throws a `TypeError` for non-number or non-finite arguments and a `RangeError` with the message `Cannot divide by zero` when `b` is `0` or `-0`.

## `greet(name, salutation = 'Hello')`

Returns `<salutation>, <name>!` when `name` and `salutation` are non-blank strings. `salutation` defaults to `Hello`, so `greet('Ada')` returns `Hello, Ada!`. It throws a `TypeError` with the message `greet expects a non-blank string` for missing, non-string, or blank names, and a `TypeError` with the message `greet expects a non-blank salutation string` for missing, non-string, or blank salutations.

Run the tests with `npm test`.
