# JavaScript Comparison Operators

Track: **04 JavaScript Operators**

## Core Idea

Comparison returns `true` or `false`.

## Most Important Distinction

```js
5 == "5";  // true  (coercion)
5 === "5"; // false (strict type + value)
```

Prefer `===` and `!==` for predictable behavior.

## String Comparisons

Strings compare lexicographically, not numerically.

```js
"20" < "5"; // true lexicographically? actually false by character order
```

Convert types explicitly when needed.

## Quick Check

- When should `===` be used over `==`?
- Why can mixed-type comparisons surprise you?
## Learning Path

- Prerequisite: **JavaScript Assignment Operators**
- Next Topic: **JavaScript Logical Operators**

## Mini Exercises

1. Write one small code example from this topic without looking at notes.
2. Modify one existing example so it fails, then fix it and explain why.
3. Explain this topic in 3-5 lines as if teaching a beginner.
