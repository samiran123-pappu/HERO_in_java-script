try {
  console.log(carName);
} catch (err) {
  console.log("ReferenceError for const before declaration");
}
const carName = "Volvo";
console.log(carName);
