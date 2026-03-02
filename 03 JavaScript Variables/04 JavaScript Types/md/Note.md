# JavaScript Types

Track: **03 JavaScript Variables**

## Core Idea

JavaScript values have types, and understanding type behavior is essential for correct logic.

## Primitive Types

- `string`
- `number`
- `boolean`
- `bigint`
- `undefined`
- `null`
- `symbol`

## Non-Primitive

- `object` (includes arrays, dates, maps, sets, etc.)

## Useful Type Checks

```js
typeof "hello"; // string
typeof 42;      // number
Array.isArray([1,2,3]); // true
```

## Numeric String vs Number

```js
"10" + 5; // "105"
"10" - 5; // 5
```

Different operators trigger different coercion behavior.

## Special Cases

- `typeof null` returns `"object"` (historical JS quirk)
- `NaN` means invalid numeric result
- `undefined` means declared but not assigned

## Conversion Patterns

```js
Number("123");      // 123
parseInt("123px");  // 123
Boolean(0);          // false
```

Use explicit conversions before comparisons/calculations for reliability.

## Common Mistakes

- assuming input text is already number
- relying on implicit coercion in complex expressions
- confusing `null` and `undefined`

## Real-World Use

Type awareness prevents validation bugs, broken filters, and incorrect calculations.

## Quick Self-Check

- Can you explain difference between `null` and `undefined`?
- Why can `"10" + 5` and `"10" - 5` differ?
- Which check is best for arrays?
