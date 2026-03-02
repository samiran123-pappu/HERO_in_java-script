// The width() Method
// The width() method returns a new date with specific fields replaced.


import { Temporal } from "@js-temporal/polyfill";
// Create a Temporal object
const date = Temporal.PlainDate.from("2026-05-17");

// Replace month and day
const customDate = date.with({ month:12, day:25 });

console.log(customDate.toString());