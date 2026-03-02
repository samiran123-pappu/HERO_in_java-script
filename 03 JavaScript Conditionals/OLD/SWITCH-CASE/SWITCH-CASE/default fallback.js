const day = new Date().getDay();
let text = "";

switch (day) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  default:
    text = "Looking forward to weekend";
}

console.log(text);
