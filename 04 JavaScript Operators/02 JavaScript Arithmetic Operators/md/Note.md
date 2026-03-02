# JavaScript Arithmetic Operators

Track: **04 JavaScript Operators**

## Arithmetic Operators (Complete)

- `+` Addition
- `-` Subtraction
- `*` Multiplication
- `/` Division
- `%` Modulus (remainder)
- `**` Exponentiation
- `++` Increment
- `--` Decrement

## How They Work

### Addition
```js
let z = 5 + 2; // 7
```

### Subtraction
```js
let z = 5 - 2; // 3
```

### Multiplication
```js
let z = 5 * 2; // 10
```

### Division
```js
let z = 5 / 2; // 2.5
```

### Modulus
```js
let z = 5 % 2; // 1
```

Use `%` to check even/odd:

```js
n % 2 === 0 // even
```

### Exponentiation
```js
let z = 5 ** 2; // 25
```

Equivalent older style:

```js
Math.pow(5, 2)
```

### Increment / Decrement
```js
let x = 5;
x++; // 6
x--; // 5
```

## Operator Precedence

JavaScript follows precedence rules, not always left-to-right.

```js
100 + 50 * 3;   // 250
(100 + 50) * 3; // 450
```

Use parentheses when expression has mixed operators.

## Common Mistakes

- expecting integer division (`5 / 2` is `2.5`)
- confusing `%` with percentage
- using long expressions without parentheses

## Real-World Use

Arithmetic drives:

- totals/subtotals
- tax/discounts
- pagination index math
- scoring/ranking systems

## Quick Self-Check

- Can you explain `%` in one sentence?
- Can you compute `2 + 3 * 4` and `(2 + 3) * 4`?
- Can you write an even-number check?
