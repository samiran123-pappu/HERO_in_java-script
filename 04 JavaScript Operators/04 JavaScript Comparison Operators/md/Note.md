# JavaScript Comparison Operators

Track: **04 JavaScript Operators**

## Comparison Operators

- `==` equal (after coercion)
- `===` equal value and equal type
- `!=` not equal (after coercion)
- `!==` not equal value or type
- `>` greater than
- `<` less than
- `>=` greater than or equal
- `<=` less than or equal

Comparisons return only boolean values: `true` or `false`.

## `==` vs `===` (Critical)

```js
5 == "5";   // true
5 === "5";  // false
```

Prefer strict operators (`===`, `!==`) in modern code.

## String Comparison

Strings compare lexicographically (dictionary-like order):

```js
"A" < "B";   // true
"20" < "5";  // true? no, false by lexicographic order rules
```

Convert to numbers when numeric logic is intended.

```js
Number("20") < Number("5"); // false
```

## Mixed-Type Comparison Risks

JavaScript may coerce values before comparison:

```js
2 < "12";    // true
2 < "John";  // false
```

`"John"` cannot become a valid number, causing comparison surprises.

## Practical Pattern

```js
const age = Number(inputAge);
if (Number.isNaN(age)) {
  message = "Input is not a number";
} else {
  message = age < 18 ? "Too young" : "Old enough";
}
```

## Common Mistakes

- relying on loose equality for critical checks
- comparing strings when numeric comparison is needed
- ignoring type conversion in user input

## Quick Self-Check

- Why is `===` safer than `==`?
- What result do you expect from `"2" > "12"` and why?
- When should you call `Number()` before comparing?
