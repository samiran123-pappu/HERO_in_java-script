# JavaScript Break

Track: **06 JavaScript Loops**

## Core Idea

`break` exits a loop or switch immediately.

Use it when further iterations are unnecessary.

```js
for (let i=0;i<10;i++) {
  if (i === 3) break;
}
```

## Labeled Break

Can exit outer loops in nested scenarios:

```js
outer: for (...) {
  for (...) {
    break outer;
  }
}
```

## Quick Check

- Can you explain difference between `break` and `continue`?
## Learning Path

- Prerequisite: **JavaScript While Loops**
- Next Topic: **JavaScript Continue**

## Mini Exercises

1. Write one small code example from this topic without looking at notes.
2. Modify one existing example so it fails, then fix it and explain why.
3. Explain this topic in 3-5 lines as if teaching a beginner.
