let d = new Date(2026, 0, 17); // Month 0 = January
console.log(d); // Output: Sat Jan 17 2026 00:00:00 GMT+0000 (Coordinated Universal Time)




// Why Was Temporal Created?
// The Date object was created in 1995 and has some design issues that still cause bugs today.

// For example, months in Date are zero-based, which is confusing.

// Another problem is that many Date methods change the same object (mutation), which can create unexpected results.

