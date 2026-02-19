// ======================================
// JavaScript Bitwise Operators – One Page
// Uses + Examples
// ======================================

// AND (&) → check if specific bit is ON (masking, permissions)
console.log("AND operator");
console.log(5 & 1);

// OR (|) → turn ON specific bits (combine flags, enable options)
console.log("OR operator");
console.log(5 | 1);

// XOR (^) → toggle bits, detect difference, swapping numbers
console.log("XOR operator");
console.log(5 ^ 1);

// NOT (~) → invert all bits (~x = -(x + 1))
console.log("NOT operator");
console.log(~5);

// LEFT SHIFT (<<) → fast multiply by powers of 2
console.log("LEFT SHIFT operator");
console.log(5 << 1);
console.log(5 << 2);

// SIGNED RIGHT SHIFT (>>) → divide by powers of 2 (keeps sign)
console.log("SIGNED RIGHT SHIFT operator");
console.log(5 >> 1);
console.log(-8 >> 1);

// ZERO-FILL RIGHT SHIFT (>>>) → unsigned divide by 2 (no sign)
console.log("ZERO-FILL RIGHT SHIFT operator");
console.log(5 >>> 1);
console.log(-8 >>> 1);


// ======================================
// Real-World Uses
// ======================================

// 1. Permissions & flags
console.log("Permissions & flags");
let READ = 1, WRITE = 2, EXECUTE = 4;
let permission = READ | WRITE;
console.log(permission & READ);

// 2. Fast math (×2 or ÷2)
console.log("Fast math (×2 or ÷2)");
console.log(10 << 1);
console.log(10 >> 1);

// 3. Toggle value using XOR
console.log("Toggle value using XOR");
let bit = 1;
bit = bit ^ 1;
console.log(bit);

// 4. Convert to 32-bit integer quickly
console.log("Convert to 32-bit integer quickly");
console.log(~~4.9);
