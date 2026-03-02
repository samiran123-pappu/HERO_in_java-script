# JavaScript Continue

Track: **06 JavaScript Loops**

## What is the `continue` Statement?

The `continue` statement provides a way to skip the rest of the code in the current loop iteration and proceed directly to the next one. It doesn't terminate the loop entirely; it just jumps to the next cycle.

### Example: Skipping an Iteration

```js
// Log only the odd numbers
for (let i = 0; i < 10; i++) {
  // If the number is even, skip to the next iteration
  if (i % 2 === 0) {
    continue;
  }
  // This code only runs for odd numbers
  console.log(i);
}
```

## Difference from Break

- `break` => exit loop completely
- `continue` => skip only this iteration

## Labeled Continue

In nested loops, labels can redirect which loop continues.
Use carefully to avoid unreadable control flow.

## Good Usage Pattern

Use `continue` to ignore invalid rows/items quickly.
Keeps main processing path cleaner.

## Common Mistakes

- using `continue` where `break` was needed
- hiding complex condition logic behind multiple `continue`s
- creating hard-to-follow nested loop control

## Real-World Use

Useful in filtering passes, validation loops, and skip-invalid-record pipelines.

## Quick Self-Check

- Can you explain `continue` in one sentence?
- When does `continue` improve readability?
- Can you identify overuse of continue in complex loops?
