const users = [
  { name: "John", age: 1 },
  { name: "Alice", age: 35 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 87 },
  { name: "David", age: 9 }
];
const byAge = users.toSorted();
const byName = users.toSorted((a, b) => a.name.localeCompare(b.name));
console.log("Sorting Objects by age :", byAge);
console.log("Sorting Objects by name:", byName);



