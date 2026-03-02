# JavaScript Code Blocks

Track: **11 JavaScript Scope**

## What is a Code Block?

A code block is a group of statements inside `{}`.

Blocks are used in:

- functions
- `if / else`
- loops (`for`, `while`)
- standalone grouping

## Why Blocks Matter

With `let`/`const`, blocks create isolated variable scope.
This helps avoid accidental variable overwrites.

```js
{
  let count = 5;
}
// count is not available here
```

## Standalone Block Pattern

You can use a block even without `if`/loop/function:

```js
{
  const width = 10;
  const height = 20;
  const area = width * height;
  console.log(area);
}
```

Useful for temporary calculations without polluting outer scope.

## Encapsulation Benefit

Blocks let you keep related logic together and local.
That improves readability and reduces naming conflicts.

## Common Mistakes

- expecting variables from inner block outside block
- using `var` in block and expecting isolation

## Real-World Use

Block scoping is heavily used in loops, validation blocks, and temporary transformations.

## Quick Self-Check

- Can you explain why standalone blocks are useful?
- What changes if you replace `let` with `var` inside a block?
- Why is block scope important in loops?
