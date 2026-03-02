const person = { name: "John", age: 30, city: "New York" };

console.log(person.name + "," + person.age + "," + person.city);

let loopText = "";
for (const k in person) loopText += person[k] + " ";
console.log(loopText.trim());

console.log(Object.values(person));
console.log(JSON.stringify(person));
