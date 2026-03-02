// Date Comparison
// Always use the equals() or compare() methods rather than standard equality operators.

// The equals() Method
// Example
// Create two Temporal objects
import { Temporal } from "@js-temporal/polyfill";
const date1 = Temporal.PlainDate.from('2026-05-17');
const date2 = Temporal.PlainDate.from('2026-05-17');

let result = date1.equals(date2);
console.log(result.toString());