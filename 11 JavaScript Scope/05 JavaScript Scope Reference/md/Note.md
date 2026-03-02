# JavaScript Scope Reference

Track: **11 JavaScript Scope**

## Fast Summary

### Scope Types

- Global: visible broadly
- Function: visible only inside function
- Block: visible only inside `{}` for `let`/`const`

### Hoisting Rules

- `var`: hoisted, initialized to `undefined`
- `let`/`const`: hoisted, TDZ until declaration
- initialization lines are not hoisted

### Strict Mode

- enable with `"use strict";`
- blocks accidental globals
- catches unsafe patterns as explicit errors

## Debug Checklist for Scope Bugs

1. Where is variable declared?
2. Which keyword is used (`var`, `let`, `const`)?
3. Is code inside block/function?
4. Is variable accessed before declaration?
5. Is strict mode enabled?

## Recommended Rules

- Prefer `const` by default
- Use `let` when reassignment is needed
- Avoid `var` in modern code
- Keep variable scope as narrow as possible
- Declare before use

## Mini Practice Prompts

- Write one example each for global, function, and block scope.
- Write one hoisting example with `var` and one with `let`.
- Show a strict-mode error and explain why it happens.
