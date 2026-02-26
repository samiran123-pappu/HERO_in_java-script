// Looping Array Elements
// One way to loop through an array, is using a for loop:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let flex = fruits.length;

let text = "     ";
console.log(`"["${text}"]"`);
console.log(`"["${text.trim()}"]"`);
for (let i = 0; i < flex; i++) {
    text += fruits[i] + ", ";
console.log(`"["${text}"]"`);
}
console.log(`"["${text}"]"`);

// The forEach() method calls a function (a callback function) once for each array element.