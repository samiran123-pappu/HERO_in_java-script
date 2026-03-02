import { Temporal } from "@js-temporal/polyfill";

let timestamp = Date.now();
console.log(timestamp.toString()); 
// With Date, you often use Date.now() to get the current timestamp.

// With Temporal, you can use Temporal.Now.instant() instead.

const now = Temporal.Now.instant();
console.log(now.toString());