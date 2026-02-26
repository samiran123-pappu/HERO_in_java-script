# Array Properties and Methods
## The real strength of JavaScript arrays are the built-in array properties and methods:

# cars.length   // Returns the number of elements
# cars.sort()   // Sorts the array
`Array methods are covered in the next chapters.`

# The length Property
## The length property of an array returns the length of an array (the number of array elements).

## Example
```bash
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
The length property is always one more than the highest array index.
```
# Accessing the First Array Element
## Example
```bash
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[0];
```
# Accessing the Last Array Element
## Example
```bash
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length - 1];
```




# Looping Array Elements
## One way to loop through an array, is using a for loop:

### Example:
```bash
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
```
## You can also use the Array.forEach() function:

### Example:
```bash
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}
```
## Adding Array Elements
### The easiest way to add a new element to an array is using the push() method:

### Example
```bash
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");  // Adds a new element (Lemon) to fruits
```
### New element can also be added to an array using the length property:
### Example:
```bash
const fruits = ["Banana", "Orange", "Apple"];
fruits[fruits.length] = "Lemon";  // Adds "Lemon" to fruits
```
# WARNING !

## Adding elements with high indexes can create undefined "holes" in an array:

### Example:
```bash
const fruits = ["Banana", "Orange", "Apple"];
fruits[6] = "Lemon";  // Creates undefined "holes" in fruits
```
# Associative Arrays
## Many programming languages support arrays with named indexes.
## Arrays with named indexes are called associative arrays (or hashes).
## JavaScript does not support arrays with named indexes.

# In JavaScript, arrays always use numbered indexes.  

## Example
```bash
const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
person.length;    // Will return 3
person[0];        // Will return "John"
```
# WARNING !!
## If you use named indexes, JavaScript will redefine the array to an object.

## After that, some array methods and properties will produce incorrect results.

 # Example:
 ```bash
const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length;     // Will return 0
person[0];         // Will return undefined
```
### The Difference Between Arrays and Objects
### In JavaScript, arrays use numbered indexes.  

### In JavaScript, objects use named indexes.

### Arrays are a special kind of objects, with numbered indexes.

### When to Use Arrays. When to use Objects.
### JavaScript does not support associative arrays.
### You should use objects when you want the element names to be strings (text).
### You should use arrays when you want the element names to be numbers.
### JavaScript new Array()
### JavaScript has a built-in array constructor new Array().

### But you can safely use [] instead.

### These two different statements both create a new empty array named points:

#### const points = new Array();
#### const points = [];
#### These two different statements both create a new array containing 6 numbers:

#### const points = new Array(40, 100, 1, 5, 25, 10);
#### const points = [40, 100, 1, 5, 25, 10];
#### The new keyword can produce some unexpected results:

#  // Create an array with three elements:
### const points = new Array(40, 100, 1);
# // Create an array with two elements:
### const points = new Array(40, 100);
# // Create an array with one element ???
### const points = new Array(40);  
# A Common Error
# const points = [40];
# is not the same as:

#### const points = new Array(40);
#### // Create an array with one element:
#### const points = [40];
#### // Create an array with 40 undefined elements:
#### const points = new Array(40);  
#### How to Recognize an Array
#### A common question is: How do I know if a variable is an array?

#### The problem is that the JavaScript operator typeof returns "object":

#### const fruits = ["Banana", "Orange", "Apple"];
#### let type = typeof fruits;
#### The typeof operator returns object because a JavaScript array is an object.

#### Solution 1:
#### To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method Array.isArray():

#### Array.isArray(fruits);
#### Solution 2:
#### he instanceof operator returns true if an object is created by a given constructor:
```bash
const fruits = ["Banana", "Orange", "Apple"];

(fruits instanceof Array);
Nested Arrays and Objects
Values in objects can be arrays, and values in arrays can be objects:

Example
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}
```
# To access arrays inside arrays, use a for-in loop for each array:

# Example
```bash
for (let i in myObj.cars) {
  x += "<h1>" + myObj.cars[i].name + "</h1>";
  for (let j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j];
  }
}
```
# Learn More:
# Basic Array Methods

# Array Search Methods

# Array Sort Methods

# Array Iteration Methods

# JavaScript Array Reference