# JavaScript Assignment Operators

Track: **04 JavaScript Operators**

## Core Idea

Assignment operators update a variable and store the result back into the same variable.

Base assignment:

```js
let x = 10;
```

## Full Assignment Mapping

- `x = y` -> assign directly
- `x += y` -> `x = x + y`
- `x -= y` -> `x = x - y`
- `x *= y` -> `x = x * y`
- `x /= y` -> `x = x / y`
- `x %= y` -> `x = x % y`
- `x **= y` -> `x = x ** y`

## Logical Assignment (ES2020)

- `x &&= y` -> assign `y` only if `x` is truthy
- `x ||= y` -> assign `y` only if `x` is falsy
- `x ??= y` -> assign `y` only if `x` is `null` or `undefined`

### Important Difference: `||=` vs `??=`

```js
let a = 0;
a ||= 10; // becomes 10 (0 is falsy)

let b = 0;
b ??= 10; // stays 0 (not null/undefined)
```

Use `??=` when `0`, `false`, or `""` are valid values you want to keep.

## String Assignment

`+=` also concatenates text:

```js
let text = "Hello";
text += " World"; // "Hello World"
```

## Step-by-Step Flow Example

```js
let price = 100;
price -= 20;  // 80
price *= 1.1; // 88
price = Math.round(price);
```

Every line reads current value, transforms it, and writes it back.

## Common Mistakes

- using `=` when you meant comparison
- using `||=` for defaults when `0` should be preserved
- forgetting `+=` on strings creates concatenation

## Real-World Use

Assignment operators are common in:

- counters
- totals
- state updates
- conditional defaults

## Quick Self-Check

- Can you expand `x %= y` manually?
- When should you pick `??=` over `||=`?
- Can you explain `x += y` without saying "shortcut"?
