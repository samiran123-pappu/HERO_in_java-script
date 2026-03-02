// JavaScript new Array()
// JavaScript has a built-in array constructor new Array().

// But you can safely use [] instead.

// These two different statements both create a new empty array named points:

// const points = new Array();
// const points = [];
// These two different statements both create a new array containing 6 numbers:

const points1 = new Array(40, 100, 1, 5, 25, 10);
const points2 = [40, 100, 1, 5, 25, 10];
// The new keyword can produce some unexpected results:

// Create an array with three elements:
const points3 = new Array(40, 100, 1);
// Create an array with two elements:
const points4 = new Array(40, 100);
// Create an array with one element ???
const points5 = new Array(40);  
// A Common Error
const points6 = [40];
// is not the same as:

const points7 = new Array(40);
// Create an array with one element:
const points8 = [40];
// Create an array with 40 undefined elements:
const points = new Array(40);  
