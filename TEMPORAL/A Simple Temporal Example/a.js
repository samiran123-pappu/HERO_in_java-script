const { Temporal } = require("@js-temporal/polyfill");

let today = Temporal.Now.plainDateISO();
let nextWeek = today.add({ days: 7 });
console.log(`Today is ${today}, and next week will be ${nextWeek}.`);