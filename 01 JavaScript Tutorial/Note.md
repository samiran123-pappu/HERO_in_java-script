# JavaScript Statements

Track: **01 JavaScript Tutorial**

## What is a Computer Program?

A computer program is a list of "instructions" to be executed by a computer.
In a programming language, these programming instructions are called **statements**.

```js
let x, y, z;    // Statement 1: Declare 3 variables
x = 5;          // Statement 2: Assign value 5 to x
y = 6;          // Statement 3: Assign value 6 to y
z = x + y;      // Statement 4: Assign the sum to z
```

## Semicolons `;`

Semicolons separate JavaScript statements.
While JS often allows you to omit them (Automatic Semicolon Insertion), it is **best practice** to add them. It makes your code precise and prevents rare but confusing bugs.

## White Space

JavaScript ignores multiple spaces. You can add white space to your script to make it more readable.

```js
let person = "Hege";
let person="Hege"; // Same thing, but harder to read
```

## Code Blocks `{ ... }`

JavaScript statements can be grouped together in code blocks, inside curly brackets `{...}`.
The purpose of code blocks is to define statements to be executed together (like in a function or loop).

```js
function myFunction() {
  // This is a block
  console.log("Hello");
  console.log("World");
}
```

## Quick Self-Check

1.  What character is used to separate statements?
2.  Does JavaScript care about extra spaces between words?
3.  What symbols are used to group statements into a block?

---
*Next Track: 02 JavaScript Syntax*