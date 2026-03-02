# JavaScript Number Properties

Track: **08 JavaScript Numbers**

## Constants

Number properties belong to the JavaScript's number object wrapper called `Number`.
These properties can only be accessed as `Number.PROPERTY`.

### `MAX_VALUE`
The largest possible number in JavaScript.

```js
let x = Number.MAX_VALUE;
```

### `MIN_VALUE`
The smallest possible number in JavaScript.

### `POSITIVE_INFINITY`

```js
let x = 1 / 0; // Infinity
```

### `NaN`
Represents a "Not-a-Number" value.

```js
let x = Number.NaN;
```

## Warning

Number properties cannot be used on variables.
`let x = 6; x.MAX_VALUE` will return `undefined`.

## Quick Self-Check

1.  How do you access the largest possible number? (`Number.MAX_VALUE`)
2.  What is the result of `1 / 0`? (`Infinity`)
3.  Can you use `myVar.MIN_VALUE`? (No, use `Number.MIN_VALUE`)

---
*End of Track 08.*