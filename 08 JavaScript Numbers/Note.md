# JavaScript Number Methods

Track: **08 JavaScript Numbers**

## Formatting Numbers

### `toString()`
Returns a number as a string.

```js
let x = 123;
x.toString(); // "123"
```

### `toFixed()`
Returns a string, with the number written with a specified number of decimals.
Perfect for working with money.

```js
let x = 9.656;
x.toFixed(0); // "10"
x.toFixed(2); // "9.66"
```

### `toPrecision()`
Returns a string, with a number written with a specified length.

```js
let x = 9.656;
x.toPrecision(2); // "9.7"
```

## Converting Variables to Numbers

There are 3 global JavaScript methods that can be used to convert variables to numbers:

1.  `Number()`: Returns a number, converted from its argument.
2.  `parseInt()`: Parses a string and returns a whole number. Spaces are allowed. Only the first number is returned.
3.  `parseFloat()`: Parses a string and returns a number. Spaces are allowed. Only the first number is returned.

```js
Number("10");          // 10
parseInt("10.33");     // 10
parseFloat("10.33");   // 10.33
parseInt("10 20 30");  // 10
```

## Quick Self-Check

1.  What method would you use to format a price to 2 decimal places? (`toFixed(2)`)
2.  What does `parseInt("10.99")` return? (10)
3.  Does `toString()` change the original variable type? (No, it returns a new string)

---
*Next Topic: Number Properties.*