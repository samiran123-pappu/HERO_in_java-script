console.log("===== CREATE DATE =====");

let now = new Date();
console.log("Current Date Object:", now);

console.log("===== GET METHODS (LOCAL TIME) =====");

console.log("Date:", now.getDate());
console.log("Day:", now.getDay());
console.log("Full Year:", now.getFullYear());
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());
console.log("Milliseconds:", now.getMilliseconds());
console.log("Month:", now.getMonth());
console.log("Time (ms since 1970):", now.getTime());
console.log("Timezone Offset:", now.getTimezoneOffset());

console.log("===== GET METHODS (UTC TIME) =====");

console.log("UTC Date:", now.getUTCDate());
console.log("UTC Day:", now.getUTCDay());
console.log("UTC Full Year:", now.getUTCFullYear());
console.log("UTC Hours:", now.getUTCHours());
console.log("UTC Minutes:", now.getUTCMinutes());
console.log("UTC Seconds:", now.getUTCSeconds());
console.log("UTC Milliseconds:", now.getUTCMilliseconds());
console.log("UTC Month:", now.getUTCMonth());

console.log("===== STATIC METHODS =====");

console.log("Date.now():", Date.now());
console.log("Date.parse():", Date.parse("2025-01-01"));
console.log("Date.UTC():", Date.UTC(2025, 0, 1));