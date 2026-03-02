// Temporal.PlainMonthDay()
// The Temporal.PlainMonthDay() method create a temporal month and day object.

// It returns the month and day of an ISO 8601 calendar date, without a year or a time zone.

// Return example: 05-01.

import { Temporal } from "@js-temporal/polyfill";
const date = Temporal.PlainMonthDay.from('2026-05-18');
console.log(`normal date: ${date}`); 
