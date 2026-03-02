// ======================================
// 1. Number.EPSILON
console.log("1.Number.EPSILON");
// ======================================
{
  console.log("1", Number.EPSILON.toString());
  console.log("2", Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON);
}


// ======================================
// 2. Number.MAX_VALUE
console.log("\n2.Number.MAX_VALUE");
// ======================================
{
  console.log("3", Number.MAX_VALUE);
  console.log("4", Number.MAX_VALUE + 1 === Number.MAX_VALUE);
}


// ======================================
// 3. Number.MIN_VALUE
console.log("\n3.Number.MIN_VALUE");
// ======================================
{
  console.log("5", Number.MIN_VALUE);
  console.log("6", Number.MIN_VALUE / 2 === 0);
}


// ======================================
// 4. Number.MAX_SAFE_INTEGER
console.log("\n4.Number.MAX_SAFE_INTEGER");
// ======================================
{
  console.log("7", Number.MAX_SAFE_INTEGER);
  console.log("8", 9007199254740991 + 1);
  console.log("9", 9007199254740992 + 1);
  console.log("10", Number.isSafeInteger(9007199254740991));
  console.log("11", Number.isSafeInteger(9007199254740992));
}


// ======================================
// 5. Number.MIN_SAFE_INTEGER
console.log("\n5.Number.MIN_SAFE_INTEGER");
// ======================================
{
  console.log("12",Number.MIN_SAFE_INTEGER);
}


// ======================================
// 6. Number.POSITIVE_INFINITY
console.log("\n6.Number.POSITIVE_INFINITY");
// ======================================
{
  console.log("13",Number.POSITIVE_INFINITY);
  console.log("14", 1 / 0);
  console.log("15", typeof Number.POSITIVE_INFINITY);
}


// ======================================
// 7. Number.NEGATIVE_INFINITY
console.log("\n7.Number.NEGATIVE_INFINITY");
// ======================================
{
  console.log("16", Number.NEGATIVE_INFINITY);
  console.log("17", -1 / 0);
}


// ======================================
// 8. Number.NaN
console.log("\n8.Number.NaN");
// ======================================
{
  console.log("18", Number.NaN);
  console.log("18", Number.NaN);
  console.log("19", typeof Number.NaN);
  console.log("20", Math.sqrt(9));
  console.log("21", NaN === NaN);
  console.log("22", Number.isNaN(NaN));
}
