


 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = " ";
fruits.forEach((value, index, array) => {
    text += value + ", ";
    console.log(`inside"["${text}"]"`);
    console.log(`inside"["${index}"]"`);
    console.log(`inside"["${array}"]"`);
});
text += " ";
console.log(`"["${text}"]"`);

// The forEach() method calls a function (a callback function) once for each array element.