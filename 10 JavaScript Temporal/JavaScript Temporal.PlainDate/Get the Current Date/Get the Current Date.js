// Use Temporal.Now.plainDateISO() to get today's date.

import { Temporal } from "@js-temporal/polyfill";

const today = Temporal.Now.plainDateISO();
console.log(today.year);
console.log(today.month);