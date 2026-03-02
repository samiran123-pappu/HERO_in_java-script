import { Temporal } from "@js-temporal/polyfill";

// Create a Temporal object
const myDate = Temporal.PlainDate.from('2026-05-17');

// Subtract a duration
const newDate = myDate.subtract({ days: 7 });

console.log(newDate.toString());