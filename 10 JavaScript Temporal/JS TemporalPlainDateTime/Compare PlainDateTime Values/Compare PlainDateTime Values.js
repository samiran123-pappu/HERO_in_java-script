// Compare PlainDateTime Values
// You can use equals().
import { Temporal } from "@js-temporal/polyfill";
const dateTime1 = Temporal.PlainDateTime.from("2026-05-17T10:00:00");
const dateTime2 = Temporal.PlainDateTime.from("2026-05-17T10:00:00");
console.log(dateTime1.equals(dateTime2));