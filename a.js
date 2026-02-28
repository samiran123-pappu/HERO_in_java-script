// Declarations
var oldWay = "function scope";
let count = 10;          // block scope
const PI = 3.14159;      // block scope, cannot reassign

// Primitive types
let num = 42;            // number
let big = 123n;          // bigint
let str = "hello";       // string
let isOk = true;         // boolean
let nothing = null;      // object (historical JS behavior in typeof)
let notSet;              // undefined
let sym = Symbol("id");  // symbol

// Non-primitive
let obj = { name: "Samir" };
let arr = [1, 2, 3];
let fn = function () { return "hi"; };

// Print value + type
console.log(count, typeof count);
console.log(PI, typeof PI);
console.log(big, typeof big);
console.log(str, typeof str);
console.log(isOk, typeof isOk);
console.log(nothing, typeof nothing); // "object"
console.log(notSet, typeof notSet);
console.log(sym, typeof sym);
console.log(obj, typeof obj);
console.log(arr, typeof arr);         // "object"
console.log(fn, typeof fn);           // "function"

// Scope demo
if (true) {
  var a = 1;
  let b = 2;
}
console.log(a); // works
// console.log(b); // error: b is block-scoped
