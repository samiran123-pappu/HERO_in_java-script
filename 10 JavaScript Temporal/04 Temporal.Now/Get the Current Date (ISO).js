// Get the Current Date (ISO)
// If you only need today's date (year, month, day), use plainDateISO()
import { Temporal } from "@js-temporal/polyfill";

let today = Temporal.Now.plainDateISO();
console.log(today.toString()); // "2024-06-01" (example output)


// This returns a PlainDate object using the ISO calendar.

