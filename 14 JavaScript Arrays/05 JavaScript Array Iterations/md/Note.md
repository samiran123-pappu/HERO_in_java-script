# JavaScript Array Iterations

Track: **14 JavaScript Arrays**

## Core Idea

Arrays are ordered collections with rich iteration/transformation APIs.

## Deep Explanation

Know which methods mutate and which return new arrays.

## Worked Example

```js
const nums=[1,2,3,4];
const even=nums.filter(n=>n%2===0);
```

## Common Mistakes

Mutating by mistake (`sort`, `splice`) when immutable flow was expected.

## Real-World Use

Arrays are everywhere: UI lists, API data, and pipelines.

## How To Study This Topic

- Predict output before running.
- Compare `.js` and `.html` behavior.
- Change one line and explain the result.
- Reduce failures to smallest reproducible snippet.

## Quick Self-Check

- Can I explain this concept clearly?
- Can I code a minimal example from memory?
- Can I identify one bug pattern and fix?
