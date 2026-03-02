console.log("var before declaration:", a); // undefined
var a = 5;

try {
  console.log(b); // TDZ error
} catch (err) {
  console.log("let before declaration error:", err.message);
}
let b = 10;

var c = 1;
console.log("c + d before d init:", c + d); // NaN (d is undefined here)
var d = 7;
