import  { Temporal } from "@js-temporal/polyfill"

let instant = Temporal.Instant.from("2026-05-01T12:00:00Z");
console.log("1", instant.toString()); // "2026-05-01T12:00:00Z"

// Using a different string format
instant = Temporal.Instant.from("2026-05-01T12:00:00.000Z");
console.log("2", instant.toString()); // "2026-05-01T12:00:00Z"