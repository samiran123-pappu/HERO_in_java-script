try {
  console.log(carName);
} catch (err) {
  console.log("ReferenceError for let before declaration");
}
let carName = "Volvo";
console.log(carName);
