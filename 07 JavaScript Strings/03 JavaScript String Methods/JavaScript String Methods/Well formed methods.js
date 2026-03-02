const good = "Hello world!";
console.log(good.isWellFormed());
const bad = "Hello World \uD800";
console.log(bad.isWellFormed());
console.log(bad.toWellFormed());
