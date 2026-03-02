# JavaScript if else

Track: **05 JavaScript Conditionals**

## Core Idea

`if...else` chooses exactly one of two branches.

```js
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```

## else if Chains

Use `else if` for multiple checks in priority order.
First true condition wins, then chain stops.

```js
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```

## Ordering Matters

Place most specific/high-priority conditions first.
Wrong order can make some branches unreachable.

## Common Mistakes

- incorrect condition order in `else if` chains
- missing final fallback `else` when needed
- duplicated condition checks across branches

## Real-World Use

Great for graded rules, threshold logic, and fallback flows.

## Quick Self-Check

- Can you explain why chain order matters?
- Can you identify unreachable branch examples?
- Can you add a proper fallback branch?
