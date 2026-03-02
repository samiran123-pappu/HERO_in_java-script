const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, value) => {
    return total + value;
}, 0);
console.log("Sum:", sum); // 15