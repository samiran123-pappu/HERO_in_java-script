// ===============================
// 1. toString()
console.log("\n1.toString()");
// ===============================
{
  let num = 123.45678;

  console.log("1", num.toString(23));
  console.log("2", num.toString(16));
}


// ===============================
// 2. toExponential()
console.log("\n2.toExponential()");
// ===============================
{
  let num = 123.45678;

  console.log("3", num.toExponential(2));
  console.log("4", num.toExponential(5));
}


// ===============================
// 3. toFixed()
console.log("\n3.toFixed()");
// ===============================
{
  let num = 123.45678;

  console.log("5",num.toFixed(5));
  console.log("6", num.toFixed(8));
  console.log("7", num.toFixed(4));
}


// ===============================
// 4. toPrecision()
console.log("\n4.toPrecision()");
// ===============================
{
  let num = 123.45678;

  console.log("8",num.toPrecision(4));
  console.log("9", num.toPrecision(6));
  console.log("10", (4444).toPrecision(7));
}


// ===============================
// 5. valueOf()
console.log("\n5.valueOf()");
// ===============================
{
  let num = new Date();

  console.log("11", num.valueOf());
  console.log("12", typeof num.valueOf());
}


// ==========================================
// STATIC NUMBER METHODS
// ==========================================


// ===============================
// 6. Number.isFinite()
console.log("\n6.Number.isFinite()");
// ===============================
{
  console.log("13", Number.isSafeInteger(-90));
  console.log("14", Number.isSafeInteger(-123));
  console.log("15", Number.isSafeInteger(123));
  console.log("16", Number.isFinite(Infinity));
  console.log("17", Number.isFinite("123"));
  console.log("18", Number.isFinite(NaN));
}


// ===============================
// 7. Number.isInteger()
console.log("\n7.Number.isInteger()");
// ===============================
{
  console.log("19", Number.isInteger(133));
  console.log("20", Number.isInteger(32/8.9));
  console.log("21", Number.isInteger(-5));
  console.log("22", Number.isInteger("5"));
}


// ===============================
// 8. Number.isNaN()
console.log("\n8.Number.isNaN()");
// ===============================
{
  console.log("23", Number.isNaN(455));
  console.log("24", Number.isNaN(0 / 0));
  console.log("25", Number.isNaN(123));
  console.log("26", Number.isNaN("NaN"));
  console.log("27", Number.isNaN(undefined));
  console.log("28", Number.isNaN(0));
}


// ===============================
// 9. Number.isSafeInteger()
console.log("\n9.Number.isSafeInteger()");
// ===============================
{
  console.log("29",Number.isSafeInteger(9007199254740991));
  console.log("30", Number.isSafeInteger(8/9));
  console.log("31", Number.isSafeInteger(123));
}


// ===============================
// 10. Number.parseInt()
console.log("\n10.Number.parseInt()");
// ===============================
{
  console.log("32", Number.parseInt(55));
  console.log("33", Number.parseInt("3.99"));
  console.log("34", Number.parseInt("0xFF"));
  console.log("35", typeof Number.parseInt("101", 2));
}


// ===============================
// 11. Number.parseFloat()
console.log("\n11.Number.parseFloat()");
// ===============================
{
  console.log("36",  Number.parseFloat("3.14159 meters"));
  console.log("37", Number.parseFloat(" -12.88rtr "));
  console.log("38",typeof Number.parseFloat(778.5654));
}
// ===============================
// 12. toString()
console.log("\n12.toString()");
// ===============================
{
  let num = 9999999999999999999999999999999999999;

  console.log("39", num.toString());
  console.log("40", num.toString(16));
}


// ===============================
// 13. toExponential()
console.log("\n13.toExponential()");
// ===============================
{
  let num = 123.45678;

  console.log("41", num.toExponential());
  console.log("42", num.toExponential(6));
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
  let num = 123.45678999;

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
  console.log(Number.isFinite(123/0));
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
