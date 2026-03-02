# JavaScript Hoisting

Track: **11 JavaScript Scope**

## Hoisting Concept

Hoisting means JavaScript handles declarations before execution of the code body.

Important: declarations are hoisted, **initializations are not**.

## `var` Hoisting

`var` declarations are hoisted and initialized as `undefined`.

```js
console.log(x); // undefined
var x = 5;
```

Conceptually similar to:

```js
var x;
console.log(x);
x = 5;
```

## `let` and `const` Hoisting

`let`/`const` are also hoisted, but uninitialized until declaration line.
This period is Temporal Dead Zone (TDZ).

```js
console.log(a); // ReferenceError
let a = 1;
```

## Initialization Not Hoisted

```js
var y = 7;
console.log(y); // 7
```

If you read before assignment line, value may be `undefined` (`var`) or error (`let`/`const`).

## Best Practice

Declare variables before use.
Even if you understand hoisting, this keeps code clear and bug-resistant.

## Common Mistakes

- assuming `let` behaves like `var` before declaration
- depending on hoisting intentionally instead of writing explicit order

## Real-World Use

Understanding hoisting speeds debugging when values appear `undefined` unexpectedly.

## Quick Self-Check

- Why does `var` show `undefined` but `let` throws?
- What is TDZ in simple words?
- Why are initializations not hoisted?
