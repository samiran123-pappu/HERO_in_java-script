// Add Time Safely (DST Safe)
// Adding days across a daylight saving change can break with Date.

// ZonedDateTime handles this correctly.

import { Temporal } from "@js-temporal/polyfill";

const zdt = Temporal.ZonedDateTime.from("2026-03-28T12:00:00+01:00[Europe/Oslo]");
const added = zdt.add({ days: 1 });

console.log(added.toString());

// Note
// Temporal adjusts automatically if a DST change happens.