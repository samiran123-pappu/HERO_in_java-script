import { Temporal } from "@js-temporal/polyfill";

const zdt = Temporal.ZonedDateTime.from
("2026-02-17T14:30:00+01:00[Europe/Oslo]");

console.log(zdt.toString());




// Note
// The time zone name is written inside square brackets.