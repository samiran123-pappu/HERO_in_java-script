// Date Arithmetic with ZonedDateTime
// ZonedDateTime handles daylight saving time (DST) safely.

import { Temporal } from "@js-temporal/polyfill";

// Create a ZonedDateTime object
const date = Temporal.ZonedDateTime.from("2026-05-17T12:00:00Z[America/New_York]");

// Add one day
const nextDay = date.add({ days: 1 });

console.log(nextDay.toString());