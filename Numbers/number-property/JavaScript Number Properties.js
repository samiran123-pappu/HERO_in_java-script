// ======================================
// 1. Number.EPSILON
// ======================================
{
  console.log(Number.EPSILON);
  console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON);
}


// ======================================
// 2. Number.MAX_VALUE
// ======================================
{
  console.log(Number.MAX_VALUE);
  console.log(Number.MAX_VALUE + 1 === Number.MAX_VALUE);
}


// ======================================
// 3. Number.MIN_VALUE
// ======================================
{
  console.log(Number.MIN_VALUE);
  console.log(Number.MIN_VALUE / 2 === 0);
}


// ======================================
// 4. Number.MAX_SAFE_INTEGER
// ======================================
{
  console.log(Number.MAX_SAFE_INTEGER);
  console.log(9007199254740991 + 1);
  console.log(9007199254740992 + 1);
  console.log(Number.isSafeInteger(9007199254740991));
  console.log(Number.isSafeInteger(9007199254740992));
}


// ======================================
// 5. Number.MIN_SAFE_INTEGER
// ======================================
{
  console.log(Number.MIN_SAFE_INTEGER);
}


// ======================================
// 6. Number.POSITIVE_INFINITY
// ======================================
{
  console.log(Number.POSITIVE_INFINITY);
  console.log(1 / 0);
  console.log(typeof Number.POSITIVE_INFINITY);
}


// ======================================
// 7. Number.NEGATIVE_INFINITY
// ======================================
{
  console.log(Number.NEGATIVE_INFINITY);
  console.log(-1 / 0);
}


// ======================================
// 8. Number.NaN
// ======================================
{
  console.log(Number.NaN);
  console.log(typeof Number.NaN);
  console.log(Math.sqrt(-1));
  console.log(NaN === NaN);
  console.log(Number.isNaN(NaN));
}
