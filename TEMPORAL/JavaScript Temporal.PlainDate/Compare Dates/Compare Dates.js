// Compare Dates
// The compare() method returns -1, 0 or 1.

// -1 if date1 is before date2
// 0 if equal
// 1 if after

import { Temporal } from "@js-temporal/polyfill";
const date1 = Temporal.PlainDate.from('2026-05-17');
const date2 = Temporal.PlainDate.from('2026-05-18');
let result = Temporal.PlainDate.compare(date2, date1);
console.log(result);

// You can also use equals() to check if two dates are the same.
const date3 = Temporal.PlainDate.from('2026-05-17');
result = date1.equals(date3);
console.log(result);

