const d = new Date("January 01, 2025");

d.setFullYear(2026, 2, 10);
d.setHours(14, 20, 30);

const someday = new Date();
someday.setFullYear(2100, 0, 14);

console.log("Updated date:", d.toString());
console.log("Today < 2100-01-14:", new Date() < someday);
