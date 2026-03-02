# JavaScript Operator Reference

Track: **04 JavaScript Operators**

## Quick Reference Tables

### Arithmetic
`+  -  *  /  %  **  ++  --`

### Assignment
`=  +=  -=  *=  /=  %=  **=  &&=  ||=  ??=`

### Comparison
`==  ===  !=  !==  >  <  >=  <=`

### Logical
`&&  ||  !`

## Recommended Defaults

1. Use `===` and `!==` unless you intentionally want coercion.
2. Use parentheses when expression mixes arithmetic/comparison/logical operators.
3. Use `??=` for null/undefined defaults.
4. Use `||=` only when all falsy values should trigger fallback.

## Debug Checklist for Operator Bugs

- Are operand types what you think they are?
- Is `+` doing addition or string concatenation?
- Is operator precedence changing your expected order?
- Are you comparing strict or loose equality?

## Practical Mini Drill

Try converting these into explicit forms:

- `x += y`
- `x ||= y`
- `x ??= y`
- `x **= y`

Then test with edge values: `0`, `""`, `false`, `null`, `undefined`.

## Final Goal

If you can explain each operator family without looking up syntax, your JavaScript logic quality will improve noticeably.
