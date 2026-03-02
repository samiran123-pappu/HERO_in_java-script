# JavaScript Let

Track: **03 JavaScript Variables**

## Core Idea

`let` declares variables that are block-scoped and reassignable.

```js
let count = 1;
count = 2; // allowed
```

## Scope Behavior

- Inside `{}` => only visible in that block
- Not redeclarable in the same scope
- Different blocks can reuse same name safely

## Hoisting Detail

`let` is hoisted but uninitialized until declaration line (Temporal Dead Zone).
Using it early throws `ReferenceError`.

## Quick Check

- Why does `let` inside an `if` not leak outside?
- Why is `let x; let x;` in same scope an error?
## Learning Path

- Prerequisite: **JavaScript Variables Basics**
- Next Topic: **JavaScript Const**

## Mini Exercises

1. Write one small code example from this topic without looking at notes.
2. Modify one existing example so it fails, then fix it and explain why.
3. Explain this topic in 3-5 lines as if teaching a beginner.
