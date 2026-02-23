// JavaScript Temporal until()
// The until() method calculates the duration between two temporal date/time values.

// The until() method is effectively the inverse of the since() method.

// Syntax
// temporal.until(temporal, options)
// The until() method returns a Temporal.Duration Object representing the elapsed time.

// The duration is positive if the "other" date is in the future, or negative if it is in the past:
import { Temporal } from "@js-temporal/polyfill";
const date1 = Temporal.PlainDate.from("2020-01-01");
const date2 = Temporal.PlainDate.from("2020-02-01");
const duration = date1.until(date2);
console.log(duration.toString());



// Return a Duration representing the time between 2026-05-17 and now:

const wedding = Temporal.PlainDate.from('2026-05-17');
const today = Temporal.Now.plainDateISO();

const duration3 = today.until(wedding);
console.log(duration3.toString());
// Return a Duration representing the time between two dates:

const start = Temporal.PlainDate.from("2026-05-01");
const end = Temporal.PlainDate.from("2026-05-17");

const difference = start.until(end);
console.log(difference.toString());



// Note
// The since() method does this - other.

// The until() method does other - this.