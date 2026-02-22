import { Temporal } from "@js-temporal/polyfill";
const now = Temporal.Now.instant();

console.log(now.toString()); 

// This returns the exact current moment in UTC.

