// JavaScript Array slice()
// The slice() method slices out a piece of an array into a new array:

// Example
// Slice out a part of an array starting from array element 1 ("Orange"):

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// let citrus = fruits.slice(1);
// console.log("unchanged original array:", fruits);
// console.log("return new array:-------:", citrus);



const fruits1 = ["Apple", "Banana", "Mango", "Orange"];
const part = fruits1.slice(1, 3);

console.log(part);   // ["Banana", "Mango"]
console.log(fruits1); // ["Apple", "Banana", "Mango", "Orange"]
