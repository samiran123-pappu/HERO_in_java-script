import { Temporal } from "@js-temporal/polyfill";
const instant = Temporal.Instant.fromEpochMilliseconds(1760721600000);
console.log(instant.toString()); 

// This creates an Instant representing the moment at the given number of milliseconds since the Unix epoch (January 1, 1970, 00:00:00 UTC).