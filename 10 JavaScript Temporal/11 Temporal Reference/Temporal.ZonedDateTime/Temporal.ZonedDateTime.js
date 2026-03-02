import { Temporal } from "@js-temporal/polyfill";

const zoneDate = Temporal.ZonedDateTime.from({
  timeZone: "America/Los_Angeles",
  year: 1995,
  month: 12,
  day: 7,
  hour: 3,
  minute: 24,
  second: 30,
  millisecond: 0,
  microsecond: 3,
  nanosecond: 500,
});

console.log(zoneDate.toString());



// The Temporal.ZonedDateTime object is optimized for cases that require a time zone, DST-safe arithmetic and interoperability with an RFC 5545 calendar.