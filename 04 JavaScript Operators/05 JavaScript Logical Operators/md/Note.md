# JavaScript Logical Operators

Track: **04 JavaScript Operators**

## Logical Operators

- `&&` AND
- `||` OR
- `!` NOT

These operators are used to combine or invert boolean logic.

## Behavior

### AND (`&&`)
Returns true only if both sides are true.

```js
x < 10 && y > 1
```

### OR (`||`)
Returns true if at least one side is true.

```js
x === 5 || y === 5
```

### NOT (`!`)
Flips boolean result.

```js
!(x === y)
```

## Short-Circuiting

Logical operators may skip evaluation:

- `A && B`: if `A` is false, `B` is not evaluated
- `A || B`: if `A` is true, `B` is not evaluated

This is useful for guards and fallback patterns.

## With Conditionals

```js
if (country === "USA" && age >= 16) {
  canDrive = true;
}
```

## With Defaults

```js
const name = inputName || "Guest";
```

Be careful: `||` treats `0`, `false`, and `""` as missing.
Use nullish behavior when needed.

## Common Mistakes

- writing unreadable long chains without parentheses
- using `||` default where `0` should be valid
- misunderstanding short-circuit side effects

## Quick Self-Check

- Can you explain short-circuit behavior?
- When should you group conditions with parentheses?
- Why can `||` defaulting be risky with numeric values?
