let x = 2;
{
  let x = 3;
  console.log("block 1", x);
}
{
  let x = 4;
  console.log("block 2", x);
}
console.log("outer", x);
