# JavaScript Booleans

Track: **05 JavaScript Conditionals**

## Core Idea

Boolean values are only `true` or `false`.
They are the foundation of decision making in conditions and loops.

## Truthy and Falsy

Falsy values include:

- `false`
- `0` and `-0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

Most other values are truthy.

## Boolean Conversion

```js
Boolean(10 > 9); // true
Boolean(0);      // false
```

## Primitive vs Boolean Object

```js
let a = false;              // primitive
let b = new Boolean(false); // object (not recommended)
```

Avoid Boolean objects; they create comparison confusion and unnecessary overhead.

## Common Mistakes

- assuming `"false"` is false (it is truthy string)
- comparing Boolean objects as if they were primitives
- not understanding truthy/falsy behavior in conditions

## Real-World Use

Booleans drive feature toggles, permission flags, loading states, and validation outcomes.

## Quick Self-Check

- Can you list all common falsy values?
- Why is `new Boolean(false)` usually a bad idea?
- What does `Boolean("false")` return and why?
