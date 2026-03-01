const x = 10;
{
  const x = 2;
  console.log("inside", x);
}
console.log("outside", x);
