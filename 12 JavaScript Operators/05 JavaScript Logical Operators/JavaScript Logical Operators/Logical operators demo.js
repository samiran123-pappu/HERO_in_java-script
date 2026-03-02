const x = 6;
const y = 3;

console.log("x < 10 && y > 1 =>", x < 10 && y > 1);
console.log("x === 5 || y === 5 =>", x === 5 || y === 5);
console.log("!(x === y) =>", !(x === y));

const isMember = false;
const canAccess = isMember || x > 5;

console.log("canAccess =>", canAccess);
