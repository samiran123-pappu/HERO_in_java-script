import { Temporal } from "@js-temporal/polyfill";
const date = Temporal.PlainDate.from('2026-05-17');
console.log(date.year); 
console.log(date.month);



// You can create a PlainDate from a string.

// The Temporal.PlainDate.from() method creates a PlainDate object with no time zone: