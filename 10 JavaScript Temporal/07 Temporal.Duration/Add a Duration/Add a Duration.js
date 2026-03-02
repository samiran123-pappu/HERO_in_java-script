// Add a Duration
// You can add a Duration to a date or date-time.

// The original value does not change.

import { Temporal } from "@js-temporal/polyfill";   
const date = Temporal.PlainDate.from("2020-01-01");
const duration = Temporal.Duration.from({ years: 1, months: 2, days: 3 });
const newDate = date.add(duration);
console.log(newDate.toString()); 
console.log(date.toString()); 

