const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;

for (; cars[i];) {
  console.log("for", cars[i]);
  i++;
}

i = 0;
while (cars[i]) {
  console.log("while", cars[i]);
  i++;
}
