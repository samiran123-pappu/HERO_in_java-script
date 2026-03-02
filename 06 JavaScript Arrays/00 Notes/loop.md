```bash
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
```

```bash
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = " ";
fruits.forEach((value, index, array) => {
    text += value + ", ";
    console.log(`inside"["${text}"]"`);
    console.log(`inside"["${index}"]"`);
    console.log(`inside"["${array}"]"`);
});
text += " ";

// function myFunction(value) {
//   text +=  value + ", ";
// }
console.log(`"["${text}"]"`);

// The forEach() method calls a function (a callback function) once for each array element.
```

```bash
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = " ";
fruits.forEach(myFunction);
text += " ";

 function myFunction(value) {
   text +=  value + ", ";
 }
console.log(`"["${text}"]"`);
```
