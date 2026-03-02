const d = new Date();

console.log("toString:", d.toString());
console.log("toDateString:", d.toDateString());
console.log("toUTCString:", d.toUTCString());
console.log("toISOString:", d.toISOString());
console.log("Date.now:", Date.now());
console.log("Date.parse:", Date.parse("March 21, 2012"));
console.log("Date.UTC:", Date.UTC(2025, 0, 1));

// Deprecated examples (do not use in production):
console.log("Deprecated getYear exists:", typeof d.getYear === "function");
console.log("Deprecated toGMTString exists:", typeof d.toGMTString === "function");
