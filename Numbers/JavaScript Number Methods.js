// ---------------------
// BASIC / INSTANCE METHODS
// (called on actual number values)
// ---------------------

let num = 123.45678;

// 1. toString()
console.log("toString():", num.toString());                // "123.45678"
console.log("toString(base 16):", num.toString(16));       // "7b.75bcd15"

// 2. toExponential()
console.log("toExponential():", num.toExponential());      // "1.2345678e+2"
console.log("toExponential(2):", num.toExponential(2));    // "1.23e+2"

// 3. toFixed()
console.log("toFixed(0):", num.toFixed(0));                // "123"
console.log("toFixed(2):", num.toFixed(2));                // "123.46"  ← rounds
console.log("toFixed(4):", num.toFixed(4));                // "123.4568"

// 4. toPrecision()
console.log("toPrecision(4):", num.toPrecision(4));        // "123.5"   ← rounds
console.log("toPrecision(6):", num.toPrecision(6));        // "123.457"
console.log("(1000).toPrecision(4):", (1000).toPrecision(4)); // "1000"  (no decimal)

// 5. valueOf()
console.log("valueOf():", num.valueOf());                  // 123.45678
console.log("typeof num.valueOf():", typeof num.valueOf()); // "number"


// ---------------------
// STATIC METHODS
// (called on Number → Number.methodName())
// ---------------------

// 1. Number.isFinite()
console.log("\nNumber.isFinite(123):", Number.isFinite(123));          // true
console.log("Number.isFinite(Infinity):", Number.isFinite(Infinity));  // false
console.log("Number.isFinite('123'):", Number.isFinite("123"));        // false  ← string!
console.log("Number.isFinite(NaN):", Number.isFinite(NaN));            // false

// 2. Number.isInteger()
console.log("Number.isInteger(42):", Number.isInteger(42));            // true
console.log("Number.isInteger(3.14):", Number.isInteger(3.14));        // false
console.log("Number.isInteger(-5):", Number.isInteger(-5));            // true
console.log("Number.isInteger('5'):", Number.isInteger("5"));          // false

// 3. Number.isNaN()
console.log("Number.isNaN(NaN):", Number.isNaN(NaN));                  // true
console.log("Number.isNaN(0/0):", Number.isNaN(0 / 0));                // true
console.log("Number.isNaN(123):", Number.isNaN(123));                  // false
console.log("Number.isNaN('NaN'):", Number.isNaN("NaN"));              // false  ← important!

// 4. Number.isSafeInteger()
console.log("Number.isSafeInteger(9007199254740991):", Number.isSafeInteger(9007199254740991));   // true   ← max safe
console.log("Number.isSafeInteger(9007199254740992):", Number.isSafeInteger(9007199254740992));   // false  ← unsafe
console.log("Number.isSafeInteger(123):", Number.isSafeInteger(123));                             // true

// 5. Number.parseInt()
console.log("Number.parseInt('42 years old'):", Number.parseInt("42 years old"));   // 42
console.log("Number.parseInt('3.99'):", Number.parseInt("3.99"));                   // 3
console.log("Number.parseInt('0xFF'):", Number.parseInt("0xFF"));                   // 255   ← hex
console.log("Number.parseInt('101', 2):", Number.parseInt("101", 2));               // 5     ← binary

// 6. Number.parseFloat()
console.log("Number.parseFloat('3.14159 meters'):", Number.parseFloat("3.14159 meters"));   // 3.14159
console.log("Number.parseFloat(' -12.88 '):", Number.parseFloat(" -12.88rtr "));               // -12.88
console.log("Number.parseFloat('abc'):", Number.parseFloat("abc"));                         // NaN