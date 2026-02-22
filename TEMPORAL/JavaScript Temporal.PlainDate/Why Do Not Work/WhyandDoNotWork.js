// Why < and > Do Not Work
// Temporal objects are objects, not primitive numbers.


// When you write (a < b), JavaScript tries to convert both objects to primitives.

// For Temporal objects, this does not produce a numeric timestamp like Dates.


import { Temporal } from "@js-temporal/polyfill";   
const date1 = Temporal.PlainDate.from('2026-05-17');
const date2 = Temporal.PlainDate.from('2026-05-18');
console.log(date1 < date2);



// When to Use PlainDate
// Any date without time

// Birthdays

// Deadlines

// Holidays

// Booking dates

// Replace Date for Date-Only Values
// With Date, you always get a time and time zone.

// This can create confusion when you only need a calendar date.

// Date Example
// let d = new Date("2026-02-17");
// PlainDate avoids this by storing only year, month, and day.

// Summary
// Temporal.PlainDate represents a calendar date without time or time zone.

// It is immutable, easy to compare, and safer than using Date for date-only values.

// Next Chapter
// JavaScript Temporal PlainDateTime.


let date3 = Temporal.PlainDate.from('2026-05-17');
console.log(date1 === date3);
 