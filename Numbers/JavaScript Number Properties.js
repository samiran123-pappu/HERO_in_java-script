// JavaScript Number Properties – Examples & Outputs

// 1. Number.EPSILON
//    → The smallest positive difference between 1 and the next representable number
//    → Useful for comparing floating-point numbers (≈ machine epsilon)
console.log("Number.EPSILON:", Number.EPSILON);                    // 2.220446049250313e-16
console.log("Is 0.1 + 0.2 ≈ 0.3?", Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON); // true (safe comparison)

// 2. Number.MAX_VALUE
//    → Largest positive number that can be represented
//    → ≈ 1.7976931348623157 × 10^308
console.log("Number.MAX_VALUE:", Number.MAX_VALUE);                // 1.7976931348623157e+308
console.log("Bigger than MAX_VALUE?", Number.MAX_VALUE + 1 === Number.MAX_VALUE); // true (overflow → still MAX_VALUE)

// 3. Number.MIN_VALUE
//    → Smallest positive number that can be represented (not negative)
//    → ≈ 5 × 10^-324 (very tiny, subnormal/denormalized)
console.log("Number.MIN_VALUE:", Number.MIN_VALUE);                // 5e-324
console.log("Smaller than MIN_VALUE?", Number.MIN_VALUE / 2 === 0); // true (underflow to 0)

// 4. Number.MAX_SAFE_INTEGER
//    → Largest integer that can be exactly represented and safely compared/arithmetically used
//    → 2⁵³ − 1 = 9007199254740991
console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);  // 9007199254740991
console.log("9007199254740991 + 1:", 9007199254740991 + 1);       // 9007199254740992 (still exact)
console.log("9007199254740992 + 1:", 9007199254740992 + 1);       // 9007199254740992 (lost precision!)

console.log("Is 9007199254740991 safe?", Number.isSafeInteger(9007199254740991)); // true
console.log("Is 9007199254740992 safe?", Number.isSafeInteger(9007199254740992)); // false

// 5. Number.MIN_SAFE_INTEGER
//    → Smallest (most negative) safe integer
//    → −(2⁵³ − 1) = -9007199254740991
console.log("Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);  // -9007199254740991

// 6. Number.POSITIVE_INFINITY
//    → Represents +∞ (positive infinity)
console.log("Number.POSITIVE_INFINITY:", Number.POSITIVE_INFINITY); // Infinity
console.log("1 / 0:", 1 / 0);                                     // Infinity
console.log("typeof Infinity:", typeof Number.POSITIVE_INFINITY);  // "number"

// 7. Number.NEGATIVE_INFINITY
//    → Represents −∞ (negative infinity)
console.log("Number.NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY); // -Infinity
console.log("-1 / 0:", -1 / 0);                                   // -Infinity

// 8. Number.NaN
//    → The "Not-a-Number" value (special number type)
//    → Used when a number operation fails (e.g. Math.sqrt(-1), parseInt("abc"))
console.log("Number.NaN:", Number.NaN);                            // NaN
console.log("typeof NaN:", typeof Number.NaN);                     // "number" (this surprises many people!)
console.log("Math.sqrt(-1):", Math.sqrt(-1));                      // NaN
console.log("NaN === NaN?", NaN === NaN);                          // false (special rule!)
console.log("Correct way to check NaN:", Number.isNaN(NaN));       // true