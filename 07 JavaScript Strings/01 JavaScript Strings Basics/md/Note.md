# JavaScript Strings Basics

Track: **07 JavaScript Strings**

## What is a String?

A string in JavaScript is a primitive data type used to represent a sequence of characters. It's how you work with text.

```js
let greeting = "Hello, World!";
let name = 'Anna';
```

Strings can be created using single quotes (`'...'`), double quotes (`"..."`), or backticks (`` `...` ``).

## Key Characteristics

1.  **Immutable**: Once a string is created, its contents cannot be changed. Methods that seem to modify a string actually return a *new* string.
    ```js
    let str = "Hi";
    str.toUpperCase(); // Returns "HI"
    console.log(str);  // "Hi" (The original is unchanged)
    str = str.toUpperCase(); // Reassignment is required to "update" it
    console.log(str);  // "HI"
    ```

2.  **Zero-Indexed**: Characters in a string can be accessed by their numerical index, starting from 0.
    ```js
    let text = "JavaScript";
    console.log(text[0]); // "J"
    console.log(text[4]); // "S"
    ```

3.  **Length Property**: The `.length` property returns the number of characters in the string.
    ```js
    console.log("Hello".length); // 5
    ```

## Escape Characters

The backslash (`\`) is used to "escape" special characters, giving them a different meaning.

- `\'` - Single quote
- `\"` - Double quote
- `\\` - Backslash
- `\n` - New line
- `\t` - Tab

```js
let message = "She said, \"It's a beautiful day!\"\nLet's go out.";
console.log(message);
// She said, "It's a beautiful day!"
// Let's go out.
```

## Strings as Objects (A Common Confusion)

While strings are primitives, JavaScript temporarily wraps them in a `String` object when you try to access a property or method (like `.length` or `.toUpperCase()`). This is why you can call methods on a primitive.

You should almost never create strings with `new String()` yourself, as it creates an object, not a primitive, which can lead to confusing behavior.

```js
let primitiveStr = "test";
let objectStr = new String("test");

typeof primitiveStr; // "string"
typeof objectStr;    // "object"

primitiveStr === objectStr; // false
```

## Common Mistakes

- Trying to modify a string by index (e.g., `myString[0] = 'h'`). This will fail silently because strings are immutable.
- Confusing a string object (`new String("...")`) with a string primitive (`"..."`).
- Forgetting that `.length` is a property, not a method (it's `str.length`, not `str.length()`).

## Real-World Use

Strings are everywhere: user names, passwords, addresses, article content, UI messages, file paths, and data interchange formats like JSON.

## Quick Self-Check

- What does it mean for a string to be "immutable"?
- How do you get the last character of any string, regardless of its length?
- Why is it generally a bad idea to use `new String("...")`?
