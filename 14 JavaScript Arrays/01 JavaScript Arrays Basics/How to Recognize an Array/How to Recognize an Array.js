// How to Recognize an Array

// The problem is that the JavaScript operator typeof returns "object":


const fruits = ["Banana", "Orange", "Apple"];
let type = typeof fruits;
console.log(type);  

// Solution 1:
let isArray = Array.isArray(fruits);
console.log(isArray);  

// Solution 2:
let isArray2 = fruits instanceof Array;
console.log(isArray2);  
