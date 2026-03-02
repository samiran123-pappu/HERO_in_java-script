// Create a PlainDateTime
// You can create a PlainDateTime from a string.

import  { Temporal } from "@js-temporal/polyfill";

const dt1 = Temporal.PlainDateTime.from("2020-01-01T12:00:00");
console.log(dt1.toString()); 
