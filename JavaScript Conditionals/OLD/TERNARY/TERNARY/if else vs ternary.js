const temp = 30;

let byIfElse = "";
if (temp > 25) {
  byIfElse = "Hot";
} else {
  byIfElse = "Cool";
}

const byTernary = temp > 25 ? "Hot" : "Cool";

console.log(byIfElse, byTernary);
