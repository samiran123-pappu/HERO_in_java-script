// Temporal.PlainTime()
// The Temporal PlainTime() method creates a time object with no date.

import { Temporal } from "@js-temporal/polyfill";

// It returns an ISO 8601 wall-clock time without a date or time zone.

// Return example: 10:30:00.

// Example
const date = new Temporal.PlainTime(10, 30);
console.log(date.toString());