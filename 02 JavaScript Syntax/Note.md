# JavaScript Identifiers

Track: **02 JavaScript Syntax**

## What are Identifiers?

Identifiers are names.
In JavaScript, identifiers are used to name variables, keywords, functions, and labels.

## Naming Rules

The rules for legal names are the same in most programming languages.
A JavaScript name must begin with:

1.  A letter (A-Z or a-z)
2.  A dollar sign ($)
3.  Or an underscore (_)

Subsequent characters may be letters, digits, underscores, or dollar signs.

**Note:** Numbers are not allowed as the first character.

## Case Sensitivity

All JavaScript identifiers are **case sensitive**.

```js
let lastName, lastname;
lastName = "Doe";
lastname = "Peterson";
```

`lastName` and `lastname` are two different variables.

## Camel Case

Historically, programmers have used different ways of joining multiple words into one variable name:

- **Hyphens**: `first-name` (Not allowed in JS, reserved for subtraction)
- **Underscore**: `first_name`
- **Upper Camel Case**: `FirstName` (Used for Classes)
- **Lower Camel Case**: `firstName` (The JavaScript Standard for variables/functions)

---
*End of Track 02.*