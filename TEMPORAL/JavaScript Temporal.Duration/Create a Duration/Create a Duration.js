// Create a Duration
// You can create a Duration using an object.
import { Temporal } from "@js-temporal/polyfill";
const duration = Temporal.Duration.from({
  years: 1,
  months: 2,
  weeks: 3,
  days: 4,
  hours: 5,
  minutes: 6,
  seconds: 7,
  milliseconds: 8,
  microseconds: 9,
  nanoseconds: 10,
});
console.log(duration.toString());

// You can also create a Duration using an ISO 8601 string.

const duration1 = Temporal.Duration.from({ days: 7, hours: 2 });
console.log(duration1.toString());
