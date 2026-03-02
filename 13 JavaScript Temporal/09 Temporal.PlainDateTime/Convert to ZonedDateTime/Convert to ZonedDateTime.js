// Convert to ZonedDateTime
// A PlainDateTime does not include time zone information.

// You can convert it to a ZonedDateTime if needed.


import { Temporal } from "@js-temporal/polyfill";
const dateTime = Temporal.PlainDateTime.from("2026-05-17T10:00:00");
const zonedDateTime = dateTime.toZonedDateTime("America/New_York");
console.log(zonedDateTime.toString());