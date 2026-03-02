# JavaScript While Loops

Track: **06 JavaScript Loops**

## While Loop

`while` repeats as long as condition is true.

```js
while (i < 10) {
  text += i;
  i++;
}
```

## Do While Loop

`do...while` executes body once before checking condition.

```js
do {
  text += i;
  i++;
} while (i < 10);
```

Use this when at least one run is required.

## For vs While

- `for` is cleaner when loop structure is known (init/condition/step)
- `while` is cleaner when only condition-driven repetition is needed

## Critical Safety Note

Always update condition variables.
Missing updates can lock browser/tab with infinite loop.

## Common Mistakes

- not updating loop variable
- using `do...while` when zero-run behavior is required
- unclear condition logic causing hidden infinite loops

## Real-World Use

Useful for streaming processing, retry loops, and unknown-length iterative checks.

## Quick Self-Check

- Can you explain difference between `while` and `do...while`?
- When is `while` clearer than `for`?
- How do you prevent infinite `while` loops?
