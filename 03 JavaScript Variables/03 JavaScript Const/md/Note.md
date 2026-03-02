# JavaScript Const

Track: **03 JavaScript Variables**

## Core Idea

`const` creates a variable that cannot be reassigned after declaration.

```js
const pi = 3.14;
// pi = 4; // error
```

## Important Clarification

For objects/arrays, `const` locks the binding, not internal content.

```js
const arr = [1,2];
arr.push(3); // allowed
// arr = [9]; // not allowed
```

## Rules

- Must be initialized immediately
- Block-scoped
- Cannot be redeclared in same scope

## Quick Check

- Why can `const` arrays still be mutated?
- When should you choose `const` over `let`?
## Learning Path

- Prerequisite: **JavaScript Let**
- Next Topic: **JavaScript Types**

## Mini Exercises

1. Write one small code example from this topic without looking at notes.
2. Modify one existing example so it fails, then fix it and explain why.
3. Explain this topic in 3-5 lines as if teaching a beginner.
