// JavaScript Array splice()
// The splice() method can be used to add new items to an array:

// Example
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits);

// The splice() method can be used to remove items from an array:

// Example
// const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
// fruits1.splice(0, 1);
// console.log(fruits1);


const fruits2 = ["Apple", "Banana", "Mango"];
const removed = fruits2.splice(0, 1, "Orange", "Grapes");

console.log(removed);
console.log(fruits2);  
