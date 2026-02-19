// ======================================
// JavaScript Bitwise Operators – One Page
// Uses + Examples + Outputs
// ======================================

// AND (&) → check if specific bit is ON (masking, permissions)
console.log(5 & 1);        // 1

// OR (|) → turn ON specific bits (combine flags, enable options)
console.log(5 | 1);        // 5

// XOR (^) → toggle bits, detect difference, swapping numbers
console.log(5 ^ 1);        // 4

// NOT (~) → invert all bits (~x = -(x + 1))
console.log(~5);           // -6

// LEFT SHIFT (<<) → fast multiply by powers of 2
console.log(5 << 1);       // 10
console.log(5 << 2);       // 20

// SIGNED RIGHT SHIFT (>>) → divide by powers of 2 (keeps sign)
console.log(5 >> 1);       // 2
console.log(-8 >> 1);      // -4

// ZERO-FILL RIGHT SHIFT (>>>) → unsigned divide by 2 (no sign)
console.log(5 >>> 1);      // 2
console.log(-8 >>> 1);     // large positive number


// ======================================
// Real-World Uses Summary
// ======================================

// 1. Permissions & flags
let READ = 1, WRITE = 2, EXECUTE = 4;
let permission = READ | WRITE;
console.log(permission & READ);   // 1 (has read permission)

// 2. Fast math (×2 or ÷2)
console.log(10 << 1);  // 20
console.log(10 >> 1);  // 5

// 3. Toggle value using XOR
let bit = 1;
bit = bit ^ 1;
console.log(bit);       // 0

// 4. Convert to 32-bit integer quickly
console.log(~~4.9);     // 4
