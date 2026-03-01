# JavaScript Const

`const` was introduced in ES6 (2015).

## Rules
- block scoped
- cannot be redeclared in same scope
- cannot be reassigned
- must be initialized at declaration

## Important
`const` fixes the reference, not deep value immutability.
Arrays/objects can still have internal changes.

## VIP Points
- Use `const` by default.
- Use for arrays, objects, functions, regex when reference should stay same.
