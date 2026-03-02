# JavaScript Hoisting

Hoisting means declarations are moved to the top of their scope during compilation.

- `var` declarations are hoisted and initialized as `undefined`.
- `let` and `const` are hoisted but not initialized (Temporal Dead Zone).
- Initializations are never hoisted.

Best practice: declare variables at the top of each scope.
