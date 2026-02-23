import { Temporal } from "@js-temporal/polyfill";

// Create a Temporal.Duration object representing 1 year, 2 months, and 3 days
const duration1 = Temporal.Duration.from({ years: 1, months: 2, days: 3 });
// Create another Temporal.Duration object representing 4 hours and 30 minutes
const duration2 = Temporal.Duration.from({ hours: 4, minutes: 30 });
// Add the two durations together
const totalDuration = duration1.add(duration2);
// Display the result
const demo = `Total Duration: ${totalDuration.toString()}`;
console.log(demo122);