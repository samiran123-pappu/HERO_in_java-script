# JavaScript Logical Operators

Track: **05 JavaScript Conditionals**

## Operators

- `&&` logical AND
- `||` logical OR
- `!` logical NOT
- `??` nullish coalescing

## Behavior

### AND
True only when both conditions are true.

```js
x < 10 && y > 1
```

### OR
True when at least one condition is true.

```js
x === 5 || y === 5
```

### NOT
Inverts boolean value.

```js
!(x === y)
```

### Nullish Coalescing (`??`)
Returns right side only when left side is `null` or `undefined`.

```js
const result = name ?? "missing";
```

## `||` vs `??`

- `||` treats all falsy values (`0`, `""`, `false`) as fallback triggers
- `??` treats only `null`/`undefined` as fallback triggers

## Short-Circuiting

- `A && B`: if A is false, B is skipped
- `A || B`: if A is true, B is skipped

## Common Mistakes

- using `||` when `0` is valid and should be preserved
- writing long conditions without grouping parentheses
- misunderstanding short-circuit side effects

## Real-World Use

Used for validation chains, fallback values, guards, and access checks.

## Quick Self-Check

- When should you choose `??` instead of `||`?
- Can you explain short-circuiting with one example?
- Can you simplify a nested condition with logical operators?
