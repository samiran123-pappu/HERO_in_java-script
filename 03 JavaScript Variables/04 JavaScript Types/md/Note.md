# JavaScript Types

Track: **03 JavaScript Variables**

## Core Idea

JavaScript values have types. Understanding type behavior avoids many bugs.

## Main Types

- Primitive: `string`, `number`, `boolean`, `bigint`, `undefined`, `null`, `symbol`
- Non-primitive: `object` (includes arrays, dates, maps, etc.)

## Useful Checks

```js
typeof "hello"; // string
typeof 10;       // number
Array.isArray([1,2]); // true
```

## Common Pitfalls

- `typeof null` is `"object"` (historical quirk)
- Numeric strings (`"10"`) behave differently from numbers (`10`)

## Quick Check

- Can you explain primitive vs object in one sentence?
- Can you detect array vs plain object safely?
## Learning Path

- Prerequisite: **JavaScript Const**
- Next Topic: **None (last topic in this track)**

## Mini Exercises

1. Write one small code example from this topic without looking at notes.
2. Modify one existing example so it fails, then fix it and explain why.
3. Explain this topic in 3-5 lines as if teaching a beginner.
