let age = 16;
let country = "USA";
let text = "You can not drive";

if (country === "USA") {
  if (age >= 16) {
    text = "You can drive";
  }
}

console.log("nested if:", text);

text = "You can not drive";
if (country === "USA" && age >= 16) {
  text = "You can drive";
}

console.log("and operator:", text);
