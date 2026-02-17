let text1 = "A";
let text2 = "B";
let result = text1 < text2;
console.log(result); // Output: true


let text3 = "20";
let text4 = "5";
let result1 = text3 < text4;
console.log(result1); // Output: false


// Comparing Different Types
// Comparing data of different types may give unexpected results.

// When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison. An empty string converts to 0. A non-numeric string converts to NaN which is always false.