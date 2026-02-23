
// The compare() Method
// The compare() method returns -1 if the first date is earlier, 1 if it is later, and 0 if they are equal:


import { Temporal } from "@js-temporal/polyfill";
// Create Temporal objects
const date1 = Temporal.PlainDate.from("2026-05-17");
const date2 = Temporal.PlainDate.from("2025-12-25");
const date3 = Temporal.PlainDate.from("2026-05-17");
// Compare dates
console.log(Temporal.PlainDate.compare(date1, date2));
console.log(Temporal.PlainDate.compare(date1, date3));

// The compare() method is designed to be passed directly into the JavaScript Array.sort() method:

// Date Comparison
// Always use the equals() or compare() methods rather than standard equality operators.