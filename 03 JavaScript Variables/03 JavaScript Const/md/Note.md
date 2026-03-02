# JavaScript Const

Track: **03 JavaScript Variables**

## The `const` Keyword

Introduced in ES6 (2015), `const` stands for **constant**.
It behaves like `let` (block-scoped), but with one key difference: **it cannot be reassigned**.

## Rule of Thumb

Always declare a variable with `const` unless you know that the value will change.

## Reassignment is Forbidden

```js
const PI = 3.14159;
PI = 3.14;      // TypeError: Assignment to constant variable.
PI = PI + 10;   // TypeError
```

## Must be Assigned on Declaration

```js
const PI;       // SyntaxError: Missing initializer in const declaration
PI = 3.14159;
```

## Constant Objects and Arrays

This is a common point of confusion. `const` does not define a constant **value**. It defines a constant **reference** to a value.

This means you **can** change the properties of a constant object or elements of a constant array.

```js
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

// But you can NOT reassign the array:
cars = ["Toyota", "Volvo", "Audi"];    // ERROR
```

## Quick Self-Check

1.  Can you reassign a `const` variable? (No)
2.  Can you change an item inside a `const` array? (Yes)
3.  When should you use `const`? (By default, for everything that doesn't need to change)

---
*Next Topic: Var.*