# JavaScript Var

Track: **03 JavaScript Variables**

## The `var` Keyword

Before 2015, `var` was the only way to declare variables.
You will see it in older code, but you should generally avoid using it in new code.

## Key Differences

1.  **Function Scope**: `var` is not block-scoped. It leaks out of `{ }` blocks unless it's inside a function.
2.  **Redeclaration**: `var` allows you to redeclare the same variable multiple times (which can cause bugs).
3.  **Hoisting**: `var` variables are "hoisted" to the top of their scope and initialized with `undefined`.

## The Scope Problem

```js
{
  var x = 2;
}
// x CAN be used here (it leaked out of the block)
```

With `let`, `x` would not exist here.

## The Redeclaration Problem

```js
var x = "John";
var x = 0; // No error, x is now 0
```

This makes it easy to accidentally overwrite variables.

## When to use `var`?

Only when you need to support very old browsers (like Internet Explorer 9) without a transpiler (like Babel). In modern development: **Never**.

## Quick Self-Check

1.  Does `var` respect block scope `{ }`? (No)
2.  Can you redeclare a `var` variable? (Yes)
3.  What is the modern replacement for `var`? (`let` and `const`)

---
*End of Track 03.*