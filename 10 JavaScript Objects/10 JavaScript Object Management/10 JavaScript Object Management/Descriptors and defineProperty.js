const person = { name: "John" };

Object.defineProperty(person, "id", {
  value: 101,
  writable: false,
  enumerable: true,
  configurable: false
});

console.log(Object.getOwnPropertyDescriptor(person, "id"));
console.log(Object.getOwnPropertyNames(person));
