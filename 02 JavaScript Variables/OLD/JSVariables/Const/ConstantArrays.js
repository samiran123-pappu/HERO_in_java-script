// You can change the elements of a constant array:
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Toyota";
console.log(cars); // Output: ["Toyota", "Volvo", "BMW"]
// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");
console.log(cars); // Output: ["Toyota", "Volvo", "BMW", "Audi"]

// But you can NOT reassign the array:
const cars = ["Saab", "Volvo", "BMW"];

cars = ["Toyota", "Volvo", "Audi"];    // ERROR
