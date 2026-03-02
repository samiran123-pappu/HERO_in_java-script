function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  return "Hello " + this.name;
};

const p = new Person("John");
console.log(p.greet());
console.log(Object.getPrototypeOf(p) === Person.prototype);
