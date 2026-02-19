// ======================================
// JavaScript Logical Operators – Examples
// ======================================


// AND (&&) → true only if both conditions are true
let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Allowed to enter");
} else {
  console.log("Not allowed");
}


// OR (||) → true if at least one condition is true
let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
  console.log("You can rest");
} else {
  console.log("Go to work");
}


// NOT (!) → reverses true ↔ false
let isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please log in");
} else {
  console.log("Welcome back");
}


// SHORT-CIRCUIT with &&
let user = "Samiran";

user && console.log("Hello " + user);


// SHORT-CIRCUIT with ||
let username = "";

let displayName = username || "Guest";
console.log(displayName);


// COMBINED CONDITIONS
let marks = 75;
let attendance = 80;

if (marks >= 40 && attendance >= 75) {
  console.log("Pass");
} else {
  console.log("Fail");
}
