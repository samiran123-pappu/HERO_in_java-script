const day = new Date().getDay();
let text = "";

switch (day) {
  case 4:
  case 5:
    text = "Soon it is weekend";
    break;
  case 0:
  case 6:
    text = "It is weekend";
    break;
  default:
    text = "Working day";
}

console.log(text);
