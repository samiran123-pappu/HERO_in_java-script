# JavaScript Booleans

Track: **05 JavaScript Conditionals**

## True or False

A JavaScript Boolean represents one of two values: `true` or `false`.

## The `Boolean()` Function

You can use the `Boolean()` function to find out if an expression (or a variable) is true:

```js
Boolean(10 > 9) // true
```

## Truthy and Falsy

In JavaScript, all values have an inherent boolean value.

**Everything With a "Value" is True:**
- `100`
- `"Hello"`
- `true`
- `7 + 1 + 3.14`

**Everything Without a "Value" is False (Falsy):**
- `0` (zero)
- `-0` (minus zero)
- `""` (empty string)
- `undefined`
- `null`
- `false`
- `NaN` (Not a Number)

## Common Bugs

Checking if a variable has a value using `if (x)` can fail if `x` is `0`.

```js
let count = 0;
if (count) { ... } // This will NOT run because 0 is falsy!
```

## Quick Self-Check

1.  Is the string `"false"` truthy or falsy? (Truthy! Only empty string `""` is falsy)
2.  Is `0` truthy or falsy? (Falsy)
3.  Is `undefined` truthy or falsy? (Falsy)

---
*End of Track 05.*