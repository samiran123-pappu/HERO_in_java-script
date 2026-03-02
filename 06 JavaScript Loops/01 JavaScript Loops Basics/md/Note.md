# JavaScript Loops Basics

Track: **06 JavaScript Loops**

## Core Idea

Loops repeat a block of code while a condition allows it.

Without loops, repeating tasks (like array iteration) would require duplicated code.

## Why Loops Matter

Loops are used for:

- processing arrays/lists
- generating repeated output
- accumulating totals/counters
- scanning data for matches

## Main Loop Types

- `for` (counted iteration)
- `while` (condition-based)
- `do...while` (runs at least once)

## Typical Pattern

```js
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
```

## Loop Safety Rule

Every loop must clearly define:

1. start state
2. stop condition
3. progress step

If progress is missing, loop can become infinite.

## Common Mistakes

- forgetting to update loop variable
- wrong stop condition (`<=` vs `<`)
- using loop when simple direct logic would be clearer

## Real-World Use

Loops are core for rendering lists, handling API arrays, and data transformation.

## Quick Self-Check

- Can you explain start/stop/step in one loop example?
- When is `while` better than `for`?
- How do you spot infinite-loop risk quickly?
