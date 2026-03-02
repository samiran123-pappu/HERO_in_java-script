# JavaScript Basic Array Methods

## Basic Array Methods List
```bash
Array length
Array toString()
Array at()
Array join()
Array pop()
Array push()
Array shift()
Array unshift()
Array isArray()
Array delete()
Array concat()
Array copyWithin()
Array flat()
Array slice()
Array splice()
Array toSpliced()
```

## Array `length`
```bash
The length property returns the number of elements in an array.
You can also set length to truncate an array.
```

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length); // 4

fruits.length = 2;
console.log(fruits); // ["Banana", "Orange"]
```

## Array `toString()`
```bash
Converts an array to a comma-separated string.
```

```javascript
const fruits = ["Banana", "Orange", "Apple"];
console.log(fruits.toString()); // Banana,Orange,Apple
```

## Array `at()`
```bash
Returns an element by index.
Supports negative index values to read from the end.
```

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.at(1));  // Orange
console.log(fruits.at(-1)); // Mango
```

## Array `join()`
```bash
Joins all array elements into a string with a custom separator.
```

```javascript
const fruits = ["Banana", "Orange", "Apple"];
console.log(fruits.join(" - ")); // Banana - Orange - Apple
```

## Array `pop()`
```bash
Removes the last element from an array.
Returns the removed element.
Changes the original array.
```

```javascript
const fruits = ["Banana", "Orange", "Apple"];
const removed = fruits.pop();
console.log(removed); // Apple
console.log(fruits);  // ["Banana", "Orange"]
```

## Array `push()`
```bash
Adds one or more elements to the end of an array.
Returns the new length.
Changes the original array.
```

```javascript
const fruits = ["Banana", "Orange"];
const newLen = fruits.push("Apple", "Mango");
console.log(newLen); // 4
console.log(fruits); // ["Banana", "Orange", "Apple", "Mango"]
```

## Array `shift()`
```bash
Removes the first element from an array.
Returns the removed element.
Changes the original array.
```

```javascript
const fruits = ["Banana", "Orange", "Apple"];
const removed = fruits.shift();
console.log(removed); // Banana
console.log(fruits);  // ["Orange", "Apple"]
```

## Array `unshift()`
```bash
Adds one or more elements to the beginning of an array.
Returns the new length.
Changes the original array.
```

```javascript
const fruits = ["Orange", "Apple"];
const newLen = fruits.unshift("Banana");
console.log(newLen); // 3
console.log(fruits); // ["Banana", "Orange", "Apple"]
```

## Array `isArray()`
```bash
Array.isArray() checks whether a value is an array.
```

```javascript
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("Hello"));   // false
```

## Array `delete()`
```bash
Warning:
Using delete on array elements leaves undefined holes.
It does not change array length.
Use pop(), shift(), or splice() for removing elements cleanly.
```

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];

console.log(fruits);        // [empty, "Orange", "Apple", "Mango"]
console.log(fruits.length); // 4
```

## Array `concat()`
```bash
Merges arrays and returns a new array.
Does not change existing arrays.
```

```javascript
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];

const myChildren = arr1.concat(arr2, arr3);
console.log(myChildren);
// ["Cecilie", "Lone", "Emil", "Tobias", "Linus", "Robin", "Morgan"]
```

## Array `copyWithin()`
```bash
Copies part of an array to another location in the same array.
Overwrites existing values.
Does not change array length.
```

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Lemon"];
fruits.copyWithin(2, 1, 3);
console.log(fruits);
// ["Banana", "Orange", "Orange", "Apple", "Kiwi", "Lemon"]
```

## Array `flat()`
```bash
Creates a new array with sub-array elements flattened.
Default depth is 1.
```

```javascript
const myArr = [[1, 2], [3, 4], [5, 6]];
console.log(myArr.flat()); // [1, 2, 3, 4, 5, 6]
```

## Array `slice()`
```bash
Returns selected elements as a new array.
Does not change original array.
End index is not included.
```

```javascript
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);

console.log(citrus); // ["Orange", "Lemon"]
console.log(fruits); // ["Banana", "Orange", "Lemon", "Apple", "Mango"]
```

## Array `splice()`
```bash
Adds and/or removes elements in an array.
Changes the original array.
```

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");

console.log(fruits); // ["Banana", "Orange", "Lemon", "Kiwi", "Mango"]
```

## Array `toSpliced()`
```bash
Modern non-mutating version of splice().
Returns a new array.
Does not change original array.
```

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const newFruits = fruits.toSpliced(1, 2, "Lemon", "Kiwi");

console.log(newFruits); // ["Banana", "Lemon", "Kiwi", "Mango"]
console.log(fruits);    // ["Banana", "Orange", "Apple", "Mango"]
```
