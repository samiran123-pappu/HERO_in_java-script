const person = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set renameLast(v) {
    this.lastName = v;
  }
};

person.renameLast = "Rally";
console.log(person.fullName);
