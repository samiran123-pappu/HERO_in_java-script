# JavaScript Operators Basics

Track: **04 JavaScript Operators**

## Why Operators Matter

Operators are the symbols that make your code do actual work.
Without operators, variables just store values. With operators, you can:

- calculate values
- compare values
- combine conditions
- update state

If you get operators wrong, your logic is wrong even if syntax is valid.

## Main Operator Families

- Arithmetic: `+ - * / % ** ++ --`
- Assignment: `= += -= *= /= %= **= &&= ||= ??=`
- Comparison: `== === != !== > < >= <=`
- Logical: `&& || !`

## Core Distinction: Assignment vs Comparison

This is one of the biggest beginner mistakes.

```js
let x = 5;   // assignment
x == 5;      // comparison (loose)
x === 5;     // comparison (strict)
```

`=` stores a value.
`==` and `===` check equality.

## Operator Reading Habit

Read expressions left-to-right, but respect precedence.
When in doubt, add parentheses.

```js
let result = 10 + 2 * 5;    // 20
let safe = (10 + 2) * 5;    // 60
```

## String + Number Warning

`+` is special: it can add numbers or concatenate strings.

```js
5 + 5;      // 10
"5" + 5;    // "55"
"A" + 5;    // "A5"
```

If either side becomes string in `+`, the result is string concatenation.

## Real-World Importance

Operators appear in every feature:

- validation rules
- pricing calculations
- permission checks
- filtering and sorting logic

Strong operator understanding makes your code correct and debuggable.

## Quick Self-Check

- Can you explain the difference between `=` and `===`?
- Can you predict result type for `"10" + 2`?
- Can you rewrite a complex expression with parentheses for clarity?
