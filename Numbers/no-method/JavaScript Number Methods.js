// ===============================
// 1. toString()
// ===============================
{
  let num = 123.45678;

  console.log(num.toString());
  console.log(num.toString(16));
}


// ===============================
// 2. toExponential()
// ===============================
{
  let num = 123.45678;

  console.log(num.toExponential());
  console.log(num.toExponential(2));
}


// ===============================
// 3. toFixed()
// ===============================
{
  let num = 123.45678;

  console.log(num.toFixed(0));
  console.log(num.toFixed(2));
  console.log(num.toFixed(4));
}


// ===============================
// 4. toPrecision()
// ===============================
{
  let num = 123.45678;

  console.log(num.toPrecision(4));
  console.log(num.toPrecision(6));
  console.log((1000).toPrecision(4));
}


// ===============================
// 5. valueOf()
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
// 6. Number.isFinite()
// ===============================
{
  console.log(Number.isFinite(123));
  console.log(Number.isFinite(Infinity));
  console.log(Number.isFinite("123"));
  console.log(Number.isFinite(NaN));
}


// ===============================
// 7. Number.isInteger()
// ===============================
{
  console.log(Number.isInteger(42));
  console.log(Number.isInteger(3.14));
  console.log(Number.isInteger(-5));
  console.log(Number.isInteger("5"));
}


// ===============================
// 8. Number.isNaN()
// ===============================
{
  console.log(Number.isNaN(NaN));
  console.log(Number.isNaN(0 / 0));
  console.log(Number.isNaN(123));
  console.log(Number.isNaN("NaN"));
}


// ===============================
// 9. Number.isSafeInteger()
// ===============================
{
  console.log(Number.isSafeInteger(9007199254740991));
  console.log(Number.isSafeInteger(9007199254740992));
  console.log(Number.isSafeInteger(123));
}


// ===============================
// 10. Number.parseInt()
// ===============================
{
  console.log(Number.parseInt("42 years old"));
  console.log(Number.parseInt("3.99"));
  console.log(Number.parseInt("0xFF"));
  console.log(Number.parseInt("101", 2));
}


// ===============================
// 11. Number.parseFloat()
// ===============================
{
  console.log(Number.parseFloat("3.14159 meters"));
  console.log(Number.parseFloat(" -12.88rtr "));
  console.log(Number.parseFloat("abc"));
}
// ===============================
// 1. toString()
// ===============================
{
  let num = 123.45678;

  console.log(num.toString());
  console.log(num.toString(16));
}


// ===============================
// 2. toExponential()
// ===============================
{
  let num = 123.45678;

  console.log(num.toExponential());
  console.log(num.toExponential(2));
}


// ===============================
// 3. toFixed()
// ===============================
{
  let num = 123.45678;

  console.log(num.toFixed(0));
  console.log(num.toFixed(2));
  console.log(num.toFixed(4));
}


// ===============================
// 4. toPrecision()
// ===============================
{
  let num = 123.45678;

  console.log(num.toPrecision(4));
  console.log(num.toPrecision(6));
  console.log((1000).toPrecision(4));
}


// ===============================
// 5. valueOf()
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
// 6. Number.isFinite()
// ===============================
{
  console.log(Number.isFinite(123));
  console.log(Number.isFinite(Infinity));
  console.log(Number.isFinite("123"));
  console.log(Number.isFinite(NaN));
}


// ===============================
// 7. Number.isInteger()
// ===============================
{
  console.log(Number.isInteger(42));
  console.log(Number.isInteger(3.14));
  console.log(Number.isInteger(-5));
  console.log(Number.isInteger("5"));
}


// ===============================
// 8. Number.isNaN()
// ===============================
{
  console.log(Number.isNaN(NaN));
  console.log(Number.isNaN(0 / 0));
  console.log(Number.isNaN(123));
  console.log(Number.isNaN("NaN"));
}


// ===============================
// 9. Number.isSafeInteger()
// ===============================
{
  console.log(Number.isSafeInteger(9007199254740991));
  console.log(Number.isSafeInteger(9007199254740992));
  console.log(Number.isSafeInteger(123));
}


// ===============================
// 10. Number.parseInt()
// ===============================
{
  console.log(Number.parseInt("42 years old"));
  console.log(Number.parseInt("3.99"));
  console.log(Number.parseInt("0xFF"));
  console.log(Number.parseInt("101", 2));
}


// ===============================
// 11. Number.parseFloat()
// ===============================
{
  console.log(Number.parseFloat("3.14159 meters"));
  console.log(Number.parseFloat(" -12.88rtr "));
  console.log(Number.parseFloat("abc"));
}
