# JavaScript String Templates

Track: **07 JavaScript Strings**

## What are Template Literals?

Introduced in ES6, template literals are a modern way to define strings that offer more power and better syntax than traditional single or double-quoted strings. They are enclosed by backticks (`` ` ``) instead of quotes.

```js
let traditionalString = "This is a traditional string.";
let templateLiteral = `This is a template literal.`;
```

## Key Features and Benefits

### 1. String Interpolation

This is the most powerful feature. It allows you to embed expressions directly inside a string using the `${...}` syntax. This is much cleaner and more readable than string concatenation with the `+` operator.

**Old way (Concatenation):**
```js
let name = "Alice";
let score = 95;
let message = "Hello, " + name + "! Your score is " + score + ".";
```

**New way (Interpolation):**
```js
let name = "Alice";
let score = 95;
let message = `Hello, ${name}! Your score is ${score}.`;
```
You can put any valid JavaScript expression inside the `${...}`, including function calls, arithmetic, and ternary operators.

```js
let price = 10;
let tax = 0.05;
let message = `The total price is $${(price * (1 + tax)).toFixed(2)}.`;
```

### 2. Multiline Strings

With template literals, you can create multiline strings simply by pressing Enter. There's no need for concatenation or escaping with `\n`.

**Old way:**
```js
let html = '<ul>\n' +
           '  <li>Item 1</li>\n' +
           '  <li>Item 2</li>\n' +
           '</ul>';
```

**New way:**
```js
let html = `
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
`;
```
Note that the whitespace (indentation and newlines) is part of the string.

### 3. No Need to Escape Quotes

You can use single and double quotes inside a template literal without having to escape them with a backslash.

```js
let text = `He said, "I'm learning JavaScript!"`; // No escaping needed
```

## Common Mistakes

- Using single (`'`) or double (`"`) quotes and trying to use `${...}` interpolation (it won't work).
- Forgetting the `$` or the curly braces `{}` when trying to interpolate a variable.
- Not realizing that indentation and newlines in multiline template literals are preserved in the final string.

## Real-World Use

- Generating dynamic HTML for web components or frameworks.
- Creating clear and readable log messages.
- Building API requests or SQL queries with dynamic values.

## Quick Self-Check

- What are the three main advantages of template literals over traditional strings?
- Convert this string to use a template literal: `"User: " + user.name + " (ID: " + user.id + ")"`.
- How do you create a string that spans multiple lines using template literals?
