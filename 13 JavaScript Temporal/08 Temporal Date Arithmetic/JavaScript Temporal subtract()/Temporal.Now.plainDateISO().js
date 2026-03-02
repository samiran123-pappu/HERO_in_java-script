import { Temporal } from "@js-temporal/polyfill";

// Create a Temporal object
const today = Temporal.Now.plainDateISO();

// Subtract a duration
const lastWeek = today.subtract({ days: 7 });
console.log(lastWeek.toString());

// From a Temporal.Instant you can only subtract a fixed duration (hours, minutes, seconds) but not calendar durations like months or years, as their length can vary depending on the time zone and the calendar.