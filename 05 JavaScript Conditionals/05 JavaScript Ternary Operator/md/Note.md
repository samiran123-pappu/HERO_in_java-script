# JavaScript Ternary Operator

Track: **05 JavaScript Conditionals**

## Core Idea

The ternary operator is a compact `if...else` expression.

Syntax:

```js
condition ? valueIfTrue : valueIfFalse
```

Example:

```js
let text = (age < 18) ? "Minor" : "Adult";
```

## When to Use

Use ternary for short, readable inline decisions.

Good use:

```js
const discount = isMember ? 0.2 : 0;
```

Avoid for long nested logic where readability drops.

## Nested Ternary (Use Carefully)

Possible but can become hard to read quickly.
Prefer regular `if...else` when branching grows.

## Common Mistakes

- deeply nested ternary expressions
- using ternary for side effects instead of values
- missing parentheses in complex expressions

## Real-World Use

Useful inside template strings, quick assignments, and rendering labels.

## Quick Self-Check

- Can you convert ternary to `if...else` and back?
- When should ternary be avoided?
- Can you spot unreadable nested ternary code?
