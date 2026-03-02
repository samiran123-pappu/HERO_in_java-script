const person = { firstName: "John", age: 30 };
person.age = 31;
person.city = "New York";
delete person.city;

console.log("firstName" in person, person);
