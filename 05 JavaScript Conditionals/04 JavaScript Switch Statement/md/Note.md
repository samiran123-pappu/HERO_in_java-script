# JavaScript Switch Statement

Track: **05 JavaScript Conditionals**

## Core Idea

`switch` compares one expression against many case values.
Useful when checking many exact matches.

```js
switch (day) {
  case 0:
    text = "Sunday";
    break;
  default:
    text = "Unknown";
}
```

## Important Rule: Strict Comparison

`switch` uses strict matching (`===`).
Types must match.

```js
let x = "0";
switch (x) {
  case 0:   // not matched
}
```

## break and Fall-Through

- `break` exits switch after matched case
- without `break`, execution falls through to next case

Shared-case pattern:

```js
switch(day){
  case 0:
  case 6:
    text = "Weekend";
    break;
}
```

## default

`default` runs when no case matches.
Usually placed last, but can be elsewhere if followed by `break`.

## Common Mistakes

- forgetting `break`
- expecting loose type matching
- using switch for range logic (`<`, `>`), where `if` is better

## Real-World Use

Used for menu actions, day mapping, status codes, and command routing.

## Quick Self-Check

- Why does switch fail for `"1"` vs `1`?
- When is switch better than `if...else if`?
- Can you intentionally use fall-through safely?
