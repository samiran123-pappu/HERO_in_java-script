// ======================================
// JavaScript BigInt – One Page Notes
// ======================================


// --------------------------------------
// Why BigInt exists
// --------------------------------------

// JavaScript Numbers are 64-bit floating point (IEEE 754)
// Because of this, very large integers lose precision

let a = 999999999999999;     // 15 digits (safe)
let b = 9999999999999999;    // 16 digits (unsafe)

console.log(a);
console.log(b);


// --------------------------------------
// Safe Integer Limits
// --------------------------------------

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);


// --------------------------------------
// Precision Loss Examples
// --------------------------------------

let max = 9007199254740991;
let unsafeAdd = max + 10;

console.log(max);
console.log(unsafeAdd);

let min = -9007199254740991;
let unsafeSub = min - 10;

console.log(min);
console.log(unsafeSub);


// --------------------------------------
// Important Note
// --------------------------------------

// There is NO such thing as a JavaScript Integer
// All Numbers are floating-point internally


// --------------------------------------
// Creating BigInt
// --------------------------------------

// Method 1: Using `n` suffix
let big1 = 999999999999999n;

// Method 2: Using BigInt() constructor
let big2 = BigInt("999999999999999");

console.log(big1);
console.log(big2);


// --------------------------------------
// BigInt Arithmetic
// --------------------------------------

let x = 9007199254740991n;
let y = 10n;

console.log(x + y);
console.log(x * y);
console.log(x - y);


// --------------------------------------
// BigInt Rules
// --------------------------------------

// Cannot mix Number and BigInt directly
// Must convert explicitly

let num = 10;
let big = 10n;

// console.log(num + big);  // Error

console.log(BigInt(num) + big);
console.log(Number(big) + num);


// --------------------------------------
// Type Checking
// --------------------------------------

console.log(typeof 10);
console.log(typeof 10n);
