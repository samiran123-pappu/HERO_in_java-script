const date1 = new Date();
const date2 = new Date("2022-03-25");
const date3 = new Date(2018, 11, 24, 10, 33, 30, 0);
const date4 = new Date(100000000000);

console.log("Now:", date1);
console.log("From ISO string:", date2);
console.log("From numeric params:", date3);
console.log("From milliseconds:", date4);
