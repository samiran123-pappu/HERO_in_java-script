# JavaScript Array Iteration

Track: **14 JavaScript Array**

## `forEach()`

Calls a function (a callback function) once for each array element.

```js
const numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  console.log(value);
}
```

## `map()`

Creates a **new array** by performing a function on each array element.
It does not execute the function for array elements without values.
It does not change the original array.

```js
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}
```

## `filter()`

Creates a new array with array elements that pass a test.

```js
const over18 = numbers.filter(myFunction);

function myFunction(value) {
  return value > 18;
}
```

## `reduce()`

Runs a function on each array element to produce (reduce it to) a single value.

## Quick Self-Check

1.  Which method creates a new array by transforming every element? (`map`)
2.  Which method selects elements based on a condition? (`filter`)
3.  Does `forEach` return a new array? (No, it returns `undefined`)

---
*End of Track 14.*