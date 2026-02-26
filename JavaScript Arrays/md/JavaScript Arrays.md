# JavaScript Arrays
## An Array is an object type designed for storing data collections.

### Key characteristics of JavaScript arrays are:
```bash
Elements: An array is a list of values, known as elements.

Ordered: Array elements are ordered based on their index.

Zero indexed: The first element is at index 0, the second at index 1, and so on.

Dynamic size: Arrays can grow or shrink as elements are added or removed.

Heterogeneous: Arrays can store elements of different data types (numbers, strings, objects and other arrays).
```

`Spaces and line breaks are not important. A declaration can span multiple lines:`
#### You can also create an empty array, and provide elements later:
```bash
Example
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
```


# Using the JavaScript Keyword new
```javascript
The following example also creates an Array, and assigns values to it:

const cars = new Array("Saab", "Volvo", "BMW");

console.log(cars); 
```


# Arrays are Objects
```bash
Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

But, JavaScript arrays are best described as arrays.

Arrays use numbers to access its "elements". In this example, person[0] returns John:
```

# Array:
```bash
const person = ["John", "Doe", 46];
Objects use names to access its "members". In this example, person.firstName returns John:
```
# Object:
```bash
const person = {firstName:"John", lastName:"Doe", age:46};
```


# Array Elements Can Be Objects
```bash
JavaScript variables can be objects. Arrays are special kinds of objects.

Because of this, you can have variables of different types in the same Array.

You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:
```
## myArray[0] = Date.now;
## myArray[1] = myFunction;
## myArray[2] = myCars;
