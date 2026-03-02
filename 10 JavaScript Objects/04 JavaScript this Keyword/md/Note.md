# JavaScript this Keyword

Track: **10 JavaScript Objects**

## Core Idea

Inside an object method, `this` points to the object that called that method.

```js
const person = {
  name: "John",
  hello() { return "Hello " + this.name; }
};
```

## Why It Exists

It lets one method work with different objects without rewriting logic.

## Important Distinction

Arrow functions do not create their own `this`.
For object methods, prefer regular function/method syntax.

## Quick Check

- Can you explain `person.fullName` vs `person.fullName()`?
## Learning Path

- Prerequisite: **JavaScript Object Methods**
- Next Topic: **JavaScript Display Objects**

## Mini Exercises

1. Write one small code example from this topic without looking at notes.
2. Modify one existing example so it fails, then fix it and explain why.
3. Explain this topic in 3-5 lines as if teaching a beginner.
