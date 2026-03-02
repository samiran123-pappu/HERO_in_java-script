# JavaScript this Keyword

Track: **09 JavaScript Functions**

## Core Idea

`this` depends on **how a function is called**, not where it is written.

## Common Cases

- Method call: `obj.fn()` => `this` is `obj`
- Regular function call (strict mode): `this` is `undefined`
- Arrow function: does not bind its own `this`; inherits from surrounding scope

## Practical Advice

- Use normal function syntax for object methods needing `this`
- Be careful when passing methods as callbacks (context can be lost)

## Quick Check

- Can you explain why arrow methods often fail in object method scenarios?
## Learning Path

- Prerequisite: **JavaScript Callbacks**
- Next Topic: **JavaScript call() Method**

## Mini Exercises

1. Write one small code example from this topic without looking at notes.
2. Modify one existing example so it fails, then fix it and explain why.
3. Explain this topic in 3-5 lines as if teaching a beginner.
