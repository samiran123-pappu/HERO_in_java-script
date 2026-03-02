// Nested Arrays and Objects
// Values in objects can be arrays, and values in arrays can be objects:

// Example 1: Object containing an array
const person = {
    name: "John",
    age: 30,
    hobbies: ["reading", "swimming", "coding"]
};

// Example 2: Array containing objects
const students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 21 }
];

// Example 3: Nested arrays and objects
const company = {
    name: "TechCorp",
    departments: [
        {
            name: "Engineering",
            employees: [
                { name: "John", position: "Developer" },
                { name: "Jane", position: "Designer" }
            ]
        },
        {
            name: "Marketing",
            employees: [
                { name: "Mike", position: "Manager" },
                { name: "Sarah", position: "Analyst" }
            ]
        }
    ]
};