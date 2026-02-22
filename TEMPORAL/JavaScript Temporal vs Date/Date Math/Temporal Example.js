import { Temporal } from "@js-temporal/polyfill";
let start = Temporal.PlainDate.from("2026-05-17");

let result = start.add({ days: 30 });
console.log(result.toString()); // 2026-06-16