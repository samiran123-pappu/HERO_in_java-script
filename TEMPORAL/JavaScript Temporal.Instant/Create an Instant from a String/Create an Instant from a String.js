import { Temporal } from "@js-temporal/polyfill";
const instant = Temporal.Instant.from("2026-05-01T12:00:00Z");

console.log(instant.toString());

// You can also create an Instant from an ISO 8601 string.

// The Z at the end means UTC time.

