// Adding Array Elements
// The easiest way to add a new element to an array is using the push() method:


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits);

// New element can also be added to an array using the length property:

const cars = ["BMW", "Volvo", "Saab", "Ford"];
cars[cars.length] = "Audi";
console.log(cars);

// WARNING !

// Adding elements with high indexes can create undefined "holes" in an array:

const cars1 = ["BMW", "Volvo", "Saab", "Ford"];
cars1[5] = "Audi";
console.log(cars1);