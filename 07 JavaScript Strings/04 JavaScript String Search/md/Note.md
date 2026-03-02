# JavaScript String Search

Track: **07 JavaScript Strings**

## Finding Text

### `indexOf()`

Returns the index (position) of the **first** occurrence of a string in a string.
Returns `-1` if the text is not found.

```js
let str = "Please locate where 'locate' occurs!";
str.indexOf("locate"); // Returns 7
```

### `lastIndexOf()`

Returns the index of the **last** occurrence.

```js
str.lastIndexOf("locate"); // Returns 21
```

## Checking Presence (ES6)

### `includes()`

Returns `true` if a string contains a specified value.

```js
text.includes("world"); // true
```

### `startsWith()` / `endsWith()`

Checks if a string begins or ends with specified characters.

```js
text.startsWith("Hello"); // true
text.endsWith("World");   // false
```

## Quick Self-Check

1.  What does `indexOf` return if the text is not found? (-1)
2.  Is `includes()` case-sensitive? (Yes)
3.  Which method finds the *last* occurrence of a word? (`lastIndexOf`)

---
*End of Track 07.*