// ======================================
// 1. CONSTRUCTOR & PROTOTYPE
// ======================================
{
  let num = 10;

  console.log(num.constructor);
  console.log(Number.prototype);
}


// ======================================
// 2. STATIC PROPERTIES
// ======================================
{
  console.log(Number.EPSILON);

  console.log(Number.MAX_SAFE_INTEGER);
  console.log(Number.MIN_SAFE_INTEGER);

  console.log(Number.MAX_VALUE);
  console.log(Number.MIN_VALUE);

  console.log(Number.NaN);

  console.log(Number.POSITIVE_INFINITY);
  console.log(Number.NEGATIVE_INFINITY);
}


// ======================================
// 3. STATIC METHODS
// ======================================
{
  console.log(Number.isFinite(10));
  console.log(Number.isInteger(10));
  console.log(Number.isNaN(NaN));
  console.log(Number.isSafeInteger(10));

  console.log(Number.parseFloat("3.14px"));
  console.log(Number.parseInt("42px"));
}


// ======================================
// 4. INSTANCE METHODS
// ======================================
{
  let num = 123.456;

  console.log(num.toExponential(2));
  console.log(num.toFixed(2));
  console.log(num.toPrecision(5));
  console.log(num.toString());
  console.log(num.toLocaleString());
  console.log(num.valueOf());
}
