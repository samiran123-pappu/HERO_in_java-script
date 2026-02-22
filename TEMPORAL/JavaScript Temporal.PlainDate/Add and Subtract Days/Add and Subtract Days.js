// Add and Subtract Days
// Use the add() method to add time.

// This does not change the original date.



import { Temporal } from "@js-temporal/polyfill";

const date = Temporal.PlainDate.from('2026-05-17');
const newDate = date.add({ days: 367 });
console.log(newDate.toString());