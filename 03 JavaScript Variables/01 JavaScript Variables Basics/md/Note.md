# JavaScript Variables Basics

Track: **03 JavaScript Variables**

## What is a Variable?

A variable is a named container for data.
You store a value in it, and later read/update that value while the program runs.

```js
let x = 5;
let y = 6;
let z = x + y;
```

Here `x`, `y`, and `z` are variables.

## Why Variables Matter

Variables are the foundation of all logic:

- calculations
- decisions
- loops
- function input/output
- state updates

Without variables, code cannot manage changing information.

## Declaration Keywords (Modern Rule)

- `const` -> default choice (value should not be reassigned)
- `let` -> use when reassignment is needed
- `var` -> older style, usually avoid in modern code

## Identifier Rules

Variable names:

- can include letters, digits, `_`, `$`
- cannot start with a digit
- are case-sensitive
- cannot be reserved keywords

## Assignment vs Comparison

Very common beginner confusion:

```js
let x = 10;  // assignment
x == 10;     // comparison (loose)
x === 10;    // comparison (strict)
```

## String + Number Behavior

`+` can add numbers or concatenate strings.

```js
5 + 5;      // 10
"5" + 5;    // "55"
```

## Common Mistakes

- using unclear variable names (`a`, `b`, `c`) everywhere
- mixing number and string types unintentionally
- expecting `=` to compare values

## Real-World Use

Variables are used for totals, form values, API responses, UI state, and feature flags.

## Quick Self-Check

- Can you explain when to choose `let` vs `const`?
- Can you name two invalid variable names and why?
- Can you predict output type of `"10" + 2`?
