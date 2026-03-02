# JavaScript Conditionals Basics

Track: **05 JavaScript Conditionals**

## Core Idea

Conditionals control which code path runs based on true/false results.

Without conditionals, programs can calculate values but cannot make decisions.

## Main Conditional Tools

- `if`
- `if...else`
- `if...else if...else`
- `switch`
- ternary operator `? :`

## When to Use Which

- Use `if` for a single condition.
- Use `if...else` for two branches.
- Use `else if` for multiple condition checks.
- Use `switch` for many exact-value branches.
- Use ternary for short inline choices.

## Example

```js
let label = "Unknown";

if (age >= 18) {
  label = "Adult";
} else {
  label = "Minor";
}
```

## Common Mistakes

- writing deeply nested conditions without refactoring
- choosing ternary for long complex logic (hard to read)
- using `switch` where range checks are needed

## Real-World Use

Conditionals are used in validation, permissions, feature flags, pricing rules, and UI branching.

## Quick Self-Check

- Can you choose the correct conditional form for a problem?
- Can you rewrite a complex ternary as readable `if...else`?
- Can you explain why readability matters in branch-heavy code?
