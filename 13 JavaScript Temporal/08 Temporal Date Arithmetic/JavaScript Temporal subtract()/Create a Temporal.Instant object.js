// From a Temporal.Instant you can only subtract a fixed duration (hours, minutes, seconds) but not calendar durations like months or years, as their length can vary depending on the time zone and the calendar.


import { Temporal } from "@js-temporal/polyfill";
// Create a Temporal.Instant object
const now = Temporal.Instant.fromEpochMilliseconds(Date.now());
console.log("1",now.toString());

// Subtract 5 hours and 30 minutes
const fiveHalfHoursAgo = now.subtract({ hours: 5, minutes: 30 });
console.log("2",fiveHalfHoursAgo.toString());



let b = Temporal.Instant.fromEpochMilliseconds(Date.now());
console.log("3",b.toString());
let c = b.subtract({ hours: 5, minutes: 30 })
console.log("4",c.toString());