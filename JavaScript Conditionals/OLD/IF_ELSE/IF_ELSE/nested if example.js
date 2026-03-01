const country = "USA";
const age = 16;
let text = "You can not drive";

if (country === "USA") {
  if (age >= 16) {
    text = "You can drive";
  }
}

console.log(text);
