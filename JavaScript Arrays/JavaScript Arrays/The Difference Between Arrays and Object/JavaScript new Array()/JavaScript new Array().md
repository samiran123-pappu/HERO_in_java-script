# The Difference Between Arrays and Objects
```bash
 In JavaScript, arrays use numbered indexes.  

 In JavaScript, objects use named indexes.

 Arrays are a special kind of objects, with numbered indexes.
```
# When to Use Arrays. When to use Objects.
```bash
JavaScript does not support associative arrays.
You should use objects when you want the element names to be strings (text).
You should use arrays when you want the element names to be numbers.
```
# JavaScript new Array()
```bash
JavaScript has a built-in array constructor new Array().

But you can safely use [] instead.

These two different statements both create a new empty array named points:

const points = new Array();
const points = [];
```

## These two different statements both create a new array containing 6 numbers:
```bash
const points = new Array(40, 100, 1, 5, 25, 10);
const points = [40, 100, 1, 5, 25, 10];
```
```bash
The new keyword can produce some unexpected results:

// Create an array with three elements:
const points = new Array(40, 100, 1);
// Create an array with two elements:
const points = new Array(40, 100);
// Create an array with one element ???
const points = new Array(40);  
A Common Error
const points = [40];
is not the same as:

const points = new Array(40);
// Create an array with one element:
const points = [40];
// Create an array with 40 undefined elements:
const points = new Array(40);  
```