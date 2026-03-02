


const fruits = ["Banana", "Orange", "Apple", "Mango"]
let text = " ";
fruits.forEach(myFunction);
// text += " ";
function myFunction(value) {
  text +=  value + ", ";
}
console.log(`1."["${text}"]"`);



const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
let text1 = " ";
cars.forEach(callbackfn)
// text1 += " ";
function callbackfn(value){
    text1 += value + ", ";
}
console.log(`2."["${text1}"]"`);




const cars1 = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
let text2 = " ";
cars1.forEach(function callbackfn(value){
    text2 += value + ", ";
})
// text1 += " ";

console.log(`3."["${text2}"]"`);