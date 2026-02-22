import { Temporal } from "@js-temporal/polyfill";
let now = Temporal.Now.instant();
console.log(now.toString()); // "2024-06-01T12:34:56.789Z" (example output)
