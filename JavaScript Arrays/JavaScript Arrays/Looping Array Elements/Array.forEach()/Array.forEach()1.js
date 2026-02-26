


const fruits = ["Banana", "Orange", "Apple", "Mango"]
let text = " ";
fruits.forEach(myFunction);
text += " ";
function myFunction(value) {
  text +=  value + ", ";
}
console.log(`"["${text}"]"`);