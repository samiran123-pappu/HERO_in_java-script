import { Temporal } from "@js-temporal/polyfill";

const now = Temporal.Now.plainDateTimeISO();
// const dateTime = Temporal.PlainDateTime.from("2026-02-23T03:03:34.290014274");
console.log(now.toString());
// console.log(dateTime.toString());