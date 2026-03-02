const person = {
  firstName: "John",
  lastName: "Doe",
  fullName() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName());
console.log(person.fullName);
