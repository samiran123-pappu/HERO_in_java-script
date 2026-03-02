// Use Temporal.Now.zonedDateTimeISO() to get the current date and time with your system's time zone.

import { Temporal } from "@js-temporal/polyfill";

const now = Temporal.Now.zonedDateTimeISO();
console.log(now.toString());