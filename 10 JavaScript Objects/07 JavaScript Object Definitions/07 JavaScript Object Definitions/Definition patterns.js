const literal = { a: 1 };
const withNew = new Object({ b: 2 });
const assigned = Object.assign({}, literal, withNew);
const base = { kind: "base" };
const created = Object.create(base);
created.value = 10;
const fromEntries = Object.fromEntries([["x", 1], ["y", 2]]);

console.log(assigned, created.kind, fromEntries);
