import { Temporal } from "@js-temporal/polyfill";

const date = Temporal.PlainDate.from('2026-05-17');
const newDate = date.add({ months: 7, years: 3 });
console.log(newDate.toString())

// Note
// Temporal handles month lengths automatically.