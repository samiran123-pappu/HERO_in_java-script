# JavaScript Let

Track: **03 JavaScript Variables**

## The `let` Keyword

Introduced in ES6 (2015), `let` is the modern way to declare variables that **can change**.

## Key Features

1.  **Block Scope**: Variables declared inside a `{ }` block cannot be accessed from outside the block.
2.  **Cannot be Redeclared**: You cannot accidentally declare the same variable twice in the same scope.

## Block Scope Example

```js
{
  let x = 2;
}
// x can NOT be used here
```

This is safer than `var`, which would leak out of the block.

## Reassignment

You **can** change the value of a `let` variable.

```js
let score = 10;
score = 20; // Allowed
```

## Redeclaration

You **cannot** redeclare a `let` variable in the same scope.

```js
let x = "John";
let x = 0; // SyntaxError: Identifier 'x' has already been declared
```

## Quick Self-Check

1.  Can you access a `let` variable outside the block it was defined in? (No)
2.  Can you change the value of a `let` variable? (Yes)
3.  Is `let x = 10; let x = 20;` valid code? (No)

---
*Next Topic: Const.*