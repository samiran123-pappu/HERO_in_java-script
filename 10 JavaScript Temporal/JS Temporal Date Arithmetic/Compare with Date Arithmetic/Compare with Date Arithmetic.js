// Compare with Date Arithmetic
// Date modifies the original object and may cause DST-related issues.

const start = new Date("2026-02-7");

start.setDate(start.getDate() + 10);

console.log(start.toString());