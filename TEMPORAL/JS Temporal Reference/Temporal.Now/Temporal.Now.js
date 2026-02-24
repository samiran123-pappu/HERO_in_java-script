// Temporal.Now
// The Temporal.Now object has methods for getting the current time in various formats.

// Use the Temporal.Now.zonedDateTimeISO() method for current system time:


import { Temporal } from '@js-temporal/polyfill';
const now = Temporal.Now.zonedDateTimeISO();
console.log("1",now.toString());

// Use the Temporal.Now.plainDateTimeISO() method for current system time without time zone information:
const nowPlain = Temporal.Now.plainDateTimeISO();
console.log("2",nowPlain.toString());

// Use the Temporal.Now.plainDateISO() method for calender date only:

const nowDate = Temporal.Now.plainDateISO();
console.log("3",nowDate.toString());

// Use the Temporal.Now.plainTimeISO() method for time only:
const nowTime = Temporal.Now.plainTimeISO();
console.log("4",nowTime.toString());