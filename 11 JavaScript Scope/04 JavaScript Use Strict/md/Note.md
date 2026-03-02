# JavaScript Use Strict

Track: **11 JavaScript Scope**

## What is Strict Mode?

`"use strict";` enables stricter JavaScript rules.
It helps catch unsafe patterns early.

## How to Enable

At script top (applies broadly):

```js
"use strict";
```

Inside function (local strict mode):

```js
function run() {
  "use strict";
}
```

## Why It Matters

Strict mode turns silent mistakes into errors.

Examples it blocks:

- undeclared variable assignment
- duplicate parameter names
- writing to read-only properties
- some unsafe legacy syntax

## Scope Relevance

Strict mode prevents accidental globals, which directly improves scope safety.

```js
"use strict";
x = 10; // ReferenceError
```

## `this` Difference

In strict mode, plain function call has `this === undefined`.
In sloppy mode, it can become global object.

## Common Mistakes

- adding strict mode not at top of script/function
- expecting old sloppy behavior to still work

## Real-World Use

Use strict mode for cleaner errors and safer refactoring.
Most modern toolchains and module systems already enforce strict semantics.

## Quick Self-Check

- Can you explain one bug that strict mode prevents?
- Where must `"use strict";` be placed?
- Why does strict mode help with scope issues?
