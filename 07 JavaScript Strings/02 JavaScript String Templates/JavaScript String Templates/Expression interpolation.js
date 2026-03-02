const price = 10;
const VAT = 0.25;
const total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);
