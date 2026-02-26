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