# JavaScript For Loop

Track: **06 JavaScript Loops**

## Syntax

```js
for (init; condition; step) {
  // loop body
}
```

- `init` runs once
- `condition` checked before each iteration
- `step` runs after each iteration

## Flexible Parts

All three expressions are optional, but clarity should come first.

```js
for (; i < len; ) {
  // manual step inside body
  i++;
}
```

## Scope in For Loops

Using `let i` keeps `i` block-scoped to loop.
Using `var i` leaks it outside loop scope.

## Typical Use Cases

- index-based array traversal
- range loops (0 to N)
- controlled repeat logic

## Common Mistakes

- off-by-one errors
- forgetting `i++`
- declaring loop variable with `var` and causing outside side effects

## Real-World Use

Used heavily in batching, pagination loops, and indexed operations.

## Quick Self-Check

- Can you write a loop from 1 to 10?
- Can you iterate array safely without overflow?
- Why is `let` safer than `var` in loop counters?
