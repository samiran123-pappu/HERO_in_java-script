const numbers = [4, 9, 16, 25];
const first = numbers.find(myFunction);

function myFunction(value) {
  return value > 9;
}
console.log(first);