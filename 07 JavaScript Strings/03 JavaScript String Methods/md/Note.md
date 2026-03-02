# JavaScript String Methods

Track: **07 JavaScript Strings**

## Extracting String Parts

There are 3 methods for extracting a part of a string:

1.  `slice(start, end)` (Recommended)
2.  `substring(start, end)`
3.  `substr(start, length)` (Deprecated)

### `slice()`

Extracts a part of a string and returns the extracted part in a new string.
It takes 2 parameters: start position, and end position (end not included).

```js
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13); // Returns "Banana"
```

**Negative values** count from the end of the string.

## Replacing Content

The `replace()` method replaces a specified value with another value in a string.

```js
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
```

**Note:** It only replaces the **first** match and is case-sensitive.
To replace all, use `replaceAll()` or a regex with the `/g` flag.

## Converting Case

```js
let text1 = "Hello World!";
let text2 = text1.toUpperCase(); // HELLO WORLD!
let text3 = text1.toLowerCase(); // hello world!
```

## Converting to Array

A string can be converted to an array with the `split()` method.

```js
let text = "a,b,c,d,e";
const myArray = text.split(","); // Split on commas
```

## Quick Self-Check

1.  Does `slice(0, 5)` include the character at index 5? (No)
2.  How do you replace ALL occurrences of a word? (`replaceAll`)
3.  What method converts a string into an array? (`split`)

---
*Next Topic: String Search.*