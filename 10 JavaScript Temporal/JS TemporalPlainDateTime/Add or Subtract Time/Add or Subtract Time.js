// Add or Subtract Time
// You can safely add or subtract time.

// The original value does not change.

// Example
import { Temporal } from "@js-temporal/polyfill";
const dateTime = Temporal.PlainDateTime.from("2026-05-17T10:00:00");

const earlier = dateTime.subtract({ minutes: 30 });
const later = dateTime.add({ hours: 2 });

console.log("earlier:" + earlier.toString()); // "2026-05-17T09:30:00"
console.log("later:" + later.toString()); // "2026-05-17T12:00:00"