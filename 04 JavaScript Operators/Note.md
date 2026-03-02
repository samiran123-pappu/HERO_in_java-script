# JavaScript Typeof

Track: **04 JavaScript Operators**

## Checking Types

In JavaScript, you can check the type of a variable using the `typeof` operator.

```js
typeof "John"   // "string"
typeof 3.14     // "number"
typeof true     // "boolean"
typeof undefined // "undefined"
```

## The Array Confusion

Arrays are technically objects in JavaScript.

```js
typeof [1, 2, 3] // "object"
```

To check if something is an array, use `Array.isArray()`.

## The Null Bug

This is a famous bug in JavaScript that can't be fixed because it would break old code:

```js
typeof null // "object"
```

`null` is a primitive value, but `typeof` says it's an object. Be aware of this!

## Quick Self-Check

1.  What does `typeof 42` return? ("number")
2.  What does `typeof` return for an array? ("object")
3.  What does `typeof` return for a variable that hasn't been assigned? ("undefined")

---
*End of Track 04.*