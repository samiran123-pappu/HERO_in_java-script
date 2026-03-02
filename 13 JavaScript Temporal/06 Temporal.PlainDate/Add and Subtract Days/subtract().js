import { Temporal } from "@js-temporal/polyfill";

let date = Temporal.PlainDate.from("2026-05-17");
let previousWeek = date.subtract({ days: 690000 });
console.log(previousWeek.toString()); 