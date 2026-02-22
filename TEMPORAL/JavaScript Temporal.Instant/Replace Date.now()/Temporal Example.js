import { Temporal } from "@js-temporal/polyfill";

const instant = Temporal.Now.instant();

let timestamp = instant.epochMilliseconds;
console.log(timestamp.toString());

// The property epochMilliseconds returns the timestamp value.

