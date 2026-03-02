const person1 = {
  name: "John",
  hello() { return "Hello " + this.name; }
};
const person2 = {
  name: "Anna",
  hello() { return "Hello " + this.name; }
};

console.log(person1.hello());
console.log(person2.hello());
