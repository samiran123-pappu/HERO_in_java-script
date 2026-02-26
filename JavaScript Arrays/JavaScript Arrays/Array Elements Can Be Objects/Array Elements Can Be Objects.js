// Array Elements Can Be Objects
// JavaScript variables can be objects. Arrays are special kinds of objects.

// Because of this, you can have variables of different types in the same Array.

// You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:

const myArray = [];
const myFunction = function() { return "Hello"; }

myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;