# JavaScript if

Track: **05 JavaScript Conditionals**

## Core Idea

`if` runs a block only when a condition is true.

```js
if (hour < 18) {
  greeting = "Good day";
}
```

## How Condition is Evaluated

The condition must resolve to a boolean (`true`/`false`).
Any expression that returns boolean can be used.

## Nested if

You can place one `if` inside another, but too much nesting hurts readability.

```js
if (country === "USA") {
  if (age >= 16) {
    canDrive = true;
  }
}
```

Often, combined logic is cleaner:

```js
if (country === "USA" && age >= 16) {
  canDrive = true;
}
```

## Common Mistakes

- forgetting braces in multi-line blocks
- using assignment (`=`) instead of comparison (`===`) in condition
- over-nesting when logical operators can simplify

## Real-World Use

Use `if` for guards, input validation, and preconditions before expensive operations.

## Quick Self-Check

- Can you rewrite nested `if` with logical operators?
- Why is `===` safer in condition checks?
- When should you keep nested `if` instead of merging?
