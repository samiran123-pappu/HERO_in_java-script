# Array Properties and Methods
The real strength of JavaScript arrays are the built-in array properties and methods:

cars.length   // Returns the number of elements
cars.sort()   // Sorts the array
Array methods are covered in the next chapters.

# The length Property
The length property of an array returns the length of an array (the number of array elements).

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
The length property is always one more than the highest array index.

# Accessing the First Array Element
Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[0];
# Accessing the Last Array Element
Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length - 1];