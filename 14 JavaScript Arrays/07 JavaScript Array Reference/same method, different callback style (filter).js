const demo = [5, 12, 8, 130, 44];
console.log(demo.filter(v => v > 10));
console.log(demo.filter(function (v) { return v > 10; }));