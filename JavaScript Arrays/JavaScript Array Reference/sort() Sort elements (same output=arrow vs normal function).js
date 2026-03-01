const s1 = [40, 5, 100, 1];
console.log([...s1].sort((a, b) => a - b));
console.log([...s1].sort(function (a, b) { return a - b; }));