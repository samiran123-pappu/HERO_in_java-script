// The Temporal.PlainYearMonth() method creates a temporal time and year object.


// It returns the year and month of an ISO 8601 calendar date, without a day or a time zone.

// Return example: 2026-05.


import { Temporal } from "@js-temporal/polyfill";
const date = Temporal.PlainYearMonth.from('2026-05');
console.log(`normal date: ${date}`);
