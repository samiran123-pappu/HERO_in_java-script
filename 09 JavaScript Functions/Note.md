# JavaScript Function Scope

Track: **09 JavaScript Functions**

## Local Variables

Variables declared within a JavaScript function, become **LOCAL** to the function.
Local variables have **Function Scope**: They can only be accessed from within the function.

```js
// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName
```

## Global Variables

Variables declared outside a function, become **GLOBAL**.
A global variable has **Global Scope**: All scripts and functions on a web page can access it.

```js
let carName = "Volvo";
// code here can use carName

function myFunction() {
  // code here can also use carName
}
```

## Variable Lifetime

The lifetime of a JavaScript variable starts when it is declared.
Local variables are deleted when the function is completed.
Global variables are deleted when you close the browser window (or tab).

## Quick Self-Check

1.  Can a function access a variable defined outside of it? (Yes)
2.  Can code outside a function access a variable defined inside it? (No)
3.  When are local variables destroyed? (When the function finishes)

---
*End of Track 09.*