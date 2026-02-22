// ===============================
// 1. toString()
console.log("\n1.toString()");
// ===============================
{
  let num = 123.45678;

  console.log(num.toString(35));
  console.log(num.toString(16));
}


// ===============================
// 2. toExponential()
console.log("\n2.toExponential()");
// ===============================
{
  let num = 123.45678;

  console.log(num.toExponential(99));
  console.log(num.toExponential(2));
}


// ===============================
// 3. toFixed()
console.log("\n3.toFixed()");
// ===============================
{
  let num = 123.45678;

  console.log(num.toFixed(8));
  console.log(num.toFixed(2));
  console.log(num.toFixed(4));
}


// ===============================
// 4. toPrecision()
console.log("\n4.toPrecision()");
// ===============================
{
  let num = 123.45678;

  console.log(num.toPrecision(20));
  console.log(num.toPrecision(6));
  console.log((1000).toPrecision(4));
}


// ===============================
// 5. valueOf()
console.log("\n5.valueOf()");
// ===============================
{
  let num = new Date();

  console.log(num.valueOf());
  console.log(typeof num.valueOf());
}


// ==========================================
// STATIC NUMBER METHODS
// ==========================================


// ===============================
// 6. Number.isFinite()
console.log("\n6.Number.isFinite()");
// ===============================
{
  console.log(Number.isSafeInteger(-123/9));
  console.log(Number.isSafeInteger(-123));
  console.log(Number.isSafeInteger(123));
  console.log(Number.isFinite(Infinity));
  console.log(Number.isFinite("123"));
  console.log(Number.isFinite(NaN));
}


// ===============================
// 7. Number.isInteger()
console.log("\n7.Number.isInteger()");
// ===============================
{
  console.log(Number.isInteger(133));
  console.log(Number.isInteger(32/8.9));
  console.log(Number.isInteger(-5));
  console.log(Number.isInteger("5"));
}


// ===============================
// 8. Number.isNaN()
console.log("\n8.Number.isNaN()");
// ===============================
{
  console.log(Number.isNaN(455));
  console.log(Number.isNaN(0 / 0));
  console.log(Number.isNaN(123));
  console.log(Number.isNaN("NaN"));
  console.log(Number.isNaN(undefined));
  console.log(Number.isNaN(null));
}


// ===============================
// 9. Number.isSafeInteger()
console.log("\n9.Number.isSafeInteger()");
// ===============================
{
  console.log(Number.isSafeInteger(9007199254740991));
  console.log(Number.isSafeInteger(9007199254740992));
  console.log(Number.isSafeInteger(123));
}


// ===============================
// 10. Number.parseInt()
console.log("\n10.Number.parseInt()");
// ===============================
{
  console.log(Number.parseInt("42 years old"));
  console.log(Number.parseInt("3.99"));
  console.log(Number.parseInt("0xFF"));
  console.log(typeof Number.parseInt("101", 2));
}


// ===============================
// 11. Number.parseFloat()
console.log("\n11.Number.parseFloat()");
// ===============================
{
  console.log(Number.parseFloat("3.14159 meters"));
  console.log(Number.parseFloat(" -12.88rtr "));
  console.log(Number.parseFloat("abc"));
}
// ===============================
// 12. toString()
console.log("\n12.toString()");
// ===============================
{
  let num = 123.45678;

  console.log(num.toString());
  console.log(num.toString(16));
}


// ===============================
// 13. toExponential()
console.log("\n13.toExponential()");
// ===============================
{
  let num = 123.45678;

  console.log(num.toExponential());
  console.log(num.toExponential(2));
}


// ===============================
// 14. toFixed()
console.log("\n14.toFixed()");
// ===============================
{
  let num = 123.45678;

  console.log(num.toFixed(0));
  console.log(num.toFixed(2));
  console.log(num.toFixed(4));
}


// ===============================
// 15. toPrecision()
console.log("\n15.toPrecision()");
// ===============================
{
  let num = 123.45678;


  console.log(num.toPrecision(4));
  console.log(num.toPrecision(6));
  console.log((1000).toPrecision(4));
}


// ===============================
// 16. valueOf()
console.log("\n16.valueOf()");
// ===============================
{
  let num = 123.45678;

  console.log(num.valueOf());
  console.log(typeof num.valueOf());
}


// ==========================================
// STATIC NUMBER METHODS
// ==========================================


// ===============================
// 17. Number.isFinite()
console.log("\n17.Number.isFinite()");
// ===============================
{
  console.log(Number.isFinite(123));
  console.log(Number.isFinite(Infinity));
  console.log(Number.isFinite("123"));
  console.log(Number.isFinite(NaN));
}


// ===============================
// 18. Number.isInteger()
console.log("\n18.Number.isInteger()");
// ===============================
{
  console.log(Number.isInteger(42));
  console.log(Number.isInteger(3.14));
  console.log(Number.isInteger(-5));
  console.log(Number.isInteger("5"));
}


// ===============================
// 19. Number.isNaN()
console.log("\n19.Number.isNaN()");
// ===============================
{
  console.log(Number.isNaN(NaN));
  console.log(Number.isNaN(0 / 0));
  console.log(Number.isNaN(123));
  console.log(Number.isNaN("NaN"));
}


// ===============================
// 20. Number.isSafeInteger()
console.log("\n20.Number.isSafeInteger()");
// ===============================
{
  console.log(Number.isSafeInteger(9007199254740991));
  console.log(Number.isSafeInteger(9007199254740992));
  console.log(Number.isSafeInteger(123));
}


// ===============================
// 21. Number.parseInt()
console.log("\n21.Number.parseInt()");
// ===============================
{
  console.log(Number.parseInt("42 years old"));
  console.log(Number.parseInt("3.99"));
  console.log(Number.parseInt("0xFF"));
  console.log(Number.parseInt("101", 2));
}


// ===============================
// 22. Number.parseFloat()
console.log("\n22.Number.parseFloat()");
// ===============================
{
  console.log(Number.parseFloat("3.14159 meters"));
  console.log(Number.parseFloat(" -12.88rtr "));
  console.log(Number.parseFloat("abc"));
}
