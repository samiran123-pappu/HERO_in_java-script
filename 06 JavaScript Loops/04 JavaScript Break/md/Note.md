# JavaScript Break

Track: **06 JavaScript Loops**

## Core Idea

`break` exits the nearest loop or switch immediately.

```js
for (let i = 0; i < 10; i++) {
  if (i === 3) break;
}
```

## In Switch Statements

`break` prevents fall-through into next case.
Without `break`, next cases run even if not intended.

## Labeled Break

You can break out of outer loops using labels.

```js
outer:
for (...) {
  for (...) {
    break outer;
  }
}
```

Use labels carefully. They are powerful but can reduce readability when overused.

## Common Mistakes

- forgetting `break` in switch
- using `break` where `continue` was intended
- overusing labels for logic that could be refactored

## Real-World Use

Useful when early exit saves time (first match found, invalid state detected, etc.).

## Quick Self-Check

- What is difference between `break` in loop and in switch?
- When should labeled break be considered?
- Can you rewrite a loop with early exit cleanly?
