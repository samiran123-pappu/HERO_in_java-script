import { Temporal } from "@js-temporal/polyfill";

const duration = new Temporal.Duration(0, 0, 0, 7);
console.log(duration.toString());