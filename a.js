


let d = new Date();

d.valueOf = function() {
  return 42;
}
console.log(d);