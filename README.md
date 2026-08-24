# divide

A minimal ESM utility for predictable numeric division.

```js
import { divide } from 'divide';

divide(6, 4); // 1.5
```

## `divide(a, b)`

Returns `a / b` when both arguments are finite JavaScript numbers and `b` is non-zero. It throws a `TypeError` for non-number or non-finite arguments and a `RangeError` with the message `Cannot divide by zero` when `b` is `0` or `-0`.

Run the tests with `npm test`.
