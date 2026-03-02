import { Temporal } from "@js-temporal/polyfill";
let zoned = Temporal.Now.zonedDateTimeISO();
console.log(zoned.toString()); // e.g. "2024-06-01T12:34:56.789+00:00[UTC]"


// This returns a ZonedDateTime that includes your system's time zone.

