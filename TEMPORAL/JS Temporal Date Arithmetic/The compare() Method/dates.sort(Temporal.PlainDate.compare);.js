import { Temporal } from "@js-temporal/polyfill";
// Create an Array of dates
const dates = [
  Temporal.PlainDate.from("2026-05-17"),
  Temporal.PlainDate.from("2022-01-01"),
  Temporal.PlainDate.from("2024-12-25")
];

// Sort chronologically
let sortedDates = dates.sort(Temporal.PlainDate.compare);
// console.log(sortedDates.map(date => date.toString()));
console.log(sortedDates.toString())