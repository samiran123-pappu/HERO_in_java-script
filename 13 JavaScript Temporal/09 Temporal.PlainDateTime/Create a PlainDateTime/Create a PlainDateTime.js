import { Temporal } from "@js-temporal/polyfill";

const dateTime = Temporal.PlainDateTime.from("2026-05-17T10:00:00");
console.log(dateTime.toString());

// Note
// Temporal months start at 1, not 0.