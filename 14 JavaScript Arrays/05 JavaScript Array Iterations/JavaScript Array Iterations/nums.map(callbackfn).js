// Base arrays
const nums = [1, 2, 3, 4];
const users = ["Samir", "Asha", "John"];
let a = nums.map(n => n*2);
// console.log(a);

let b = users.map(u => u.toUpperCase());
// console.log(b);
// console.log(a.forEach((t, y) => console.log(y, t)) );
console.log(a.forEach(function(t, y) { console.log(y, t); }));
// console.log(b.forEach((t, y) => console.log(y, t)) );