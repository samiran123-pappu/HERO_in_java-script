# JavaScript Array Search Methods

## Array `indexOf()`
- Returns the first index where a value is found.
- Returns `-1` if not found.
- Uses strict equality (`===`).
- Cannot reliably find `NaN`.

```js
const fruits = ["Apple", "Banana", "Mango", "Banana"];

console.log(fruits.indexOf("Banana")); // 1
console.log(fruits.indexOf("Grapes")); // -1
```

## Array `lastIndexOf()`
- Returns the last index where a value is found.
- Returns `-1` if not found.
- Searches from right to left.

```js
const fruits = ["Apple", "Banana", "Mango", "Banana"];

console.log(fruits.lastIndexOf("Banana")); // 3
console.log(fruits.lastIndexOf("Grapes")); // -1
```

## Array `includes()`
- Returns `true` if value exists, otherwise `false`.
- Good for simple existence checks.
- Can find `NaN` (unlike `indexOf`).

```js
const nums = [10, 20, NaN, 40];

console.log(nums.includes(20));  // true
console.log(nums.includes(99));  // false
console.log(nums.includes(NaN)); // true
```

## Array `find()`
- Returns the first element that matches a condition.
- Returns `undefined` if no element matches.

```js
const ages = [12, 17, 19, 25];

const adult = ages.find(age => age >= 18);
console.log(adult); // 19
```

## Array `findIndex()`
- Returns the index of the first element that matches a condition.
- Returns `-1` if no match.

```js
const ages = [12, 17, 19, 25];

const index = ages.findIndex(age => age >= 18);
console.log(index); // 2
```

## Array `findLast()`
- Returns the last element that matches a condition.
- Returns `undefined` if no match.

```js
const scores = [45, 72, 88, 65, 91, 60];

const lastHigh = scores.findLast(score => score >= 80);
console.log(lastHigh); // 91
```

## Array `findLastIndex()`
- Returns the index of the last element that matches a condition.
- Returns `-1` if no match.

```js
const scores = [45, 72, 88, 65, 91, 60];

const lastHighIndex = scores.findLastIndex(score => score >= 80);
console.log(lastHighIndex); // 4
```

## Quick Difference
- `indexOf` / `lastIndexOf`: search by exact value.
- `includes`: checks only presence (`true`/`false`).
- `find` / `findLast`: return element.
- `findIndex` / `findLastIndex`: return index.
