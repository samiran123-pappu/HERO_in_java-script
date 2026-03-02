const now = new Date();

console.log("Local year:", now.getFullYear());
console.log("Local month (0-11):", now.getMonth());
console.log("Local date:", now.getDate());
console.log("Weekday (0-6):", now.getDay());
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());
console.log("Milliseconds:", now.getMilliseconds());
console.log("Epoch ms:", now.getTime());
console.log("Timezone offset:", now.getTimezoneOffset());

console.log("UTC year:", now.getUTCFullYear());
console.log("UTC month:", now.getUTCMonth());
console.log("UTC date:", now.getUTCDate());
console.log("Date.now():", Date.now());
