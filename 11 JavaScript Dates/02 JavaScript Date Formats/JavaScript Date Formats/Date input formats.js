const iso = new Date("2015-03-25");
const shortDate = new Date("03/25/2015");
const longDate = new Date("Mar 25 2015");
const parsed = Date.parse("March 21, 2012");

console.log("ISO:", iso.toString());
console.log("Short:", shortDate.toString());
console.log("Long:", longDate.toString());
console.log("Parsed milliseconds:", parsed);
console.log("Back to Date:", new Date(parsed).toString());
