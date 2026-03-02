const dayNumber = new Date().getDay();
let day = "";
switch (dayNumber) {
  case 0: day = "Sunday"; break;
  case 1: day = "Monday"; break;
  default: day = "Other";
}
console.log(day);
