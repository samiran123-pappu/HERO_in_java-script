var cars = ["Saab", "Volvo", "BMW"];
console.log("outside before block:", cars[0]);

{
  var cars = ["Toyota", "Volvo", "BMW"];
  console.log("inside block:", cars[0]);
}

console.log("outside after block:", cars[0]);
