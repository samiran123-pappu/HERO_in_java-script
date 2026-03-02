// Calculate the Difference Between Two Dates
// You can calculate the duration between two dates using until() or since().

// JavaScript Temporal since()
// The since() method calculates the duration between two temporal date/time values.

// The since() method is effectively the inverse of the until() method.

// Syntax
// temporal.since(temporal, options)
// The since() method returns a Temporal.Duration Object representing the elapsed time.

// The duration is positive if the "other" date is in the past, or negative if it is in the future:
import { Temporal } from "@js-temporal/polyfill";
const date1 = Temporal.PlainDate.from("2020-01-01");
const date2 = Temporal.PlainDate.from("2020-02-01");

const duration = date1.since(date2);
console.log(duration.toString());



const wedding = Temporal.PlainDate.from('2026-05-17');
const today = Temporal.Now.plainDateISO();

const duration1 = today.since(wedding, {largestUnit:'years'});
console.log(duration1.toString());

const duration2 = today.since(wedding, {largestUnit:'months'});
console.log(duration2.toString());


