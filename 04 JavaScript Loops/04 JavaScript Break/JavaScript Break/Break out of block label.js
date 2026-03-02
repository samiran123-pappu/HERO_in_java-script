const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text = "";
list: {
  text += cars[0] + "\n";
  text += cars[1] + "\n";
  break list;
  text += cars[2] + "\n";
}
console.log(text);
