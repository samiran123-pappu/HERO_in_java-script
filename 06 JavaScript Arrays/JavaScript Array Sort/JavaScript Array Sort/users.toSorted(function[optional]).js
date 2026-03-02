const users = [
  { name: "John", age: 1 },
  { name: "Alice", age: 35 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 87 },
  { name: "David", age: 9 }
];
const byAge = users.toSorted();
const byName = users.toSorted((a, b) => a.name.localeCompare(b.name));
console.log("Sorting Objects by age :", byAge);
console.log("Sorting Objects by name:", byName);



// 6) Numeric Sort (ascending)
const nums3 = [40, 100, 1, 5, 25, 10];
// const asc = nums3.toSorted((a, b) => a - b);
const asc = nums3.toSorted(function(a, b) {
    return a - b;
});
console.log("Numeric Sort asc :", asc);

// 7) Numeric Sort (descending)
// const desc = nums3.toSorted((a, b) => b - a);
const desc = nums3.toSorted(function(a, b) {
    return b - a;
});
console.log("Numeric Sort desc:", desc);

// 8) Random Sort (shuffle-style using sort)
const nums4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const randomSort = nums4.toSorted(() => Math.random() - 0.5);
const randomSort = nums4.toSorted(function() {
    return Math.random() - 0.5;
});
console.log("Random Sort:", randomSort);




let a = [19, 2,73, 4, 35, 6, 7, 8, 9];
// a.reverse();
console.log(a.sort(function(a, b) {
    return a - b;
}));