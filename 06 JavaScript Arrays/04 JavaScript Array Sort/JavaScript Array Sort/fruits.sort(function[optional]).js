const fruits = ["Banana", "Apple", "Cherry", "Mango"];
console.log("sort() before:", fruits);
fruits.sort();
console.log("sort() after :", fruits);
// console.log([11,2,22,1].sort((a, b) => a - b))
console.log([11,2,22,1].sort(function(a, b) {
    return a - b;
}));