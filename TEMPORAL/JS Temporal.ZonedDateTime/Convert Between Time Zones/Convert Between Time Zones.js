// Convert Between Time Zones
// You can convert a ZonedDateTime to another time zone.

import { Temporal } from "@js-temporal/polyfill";

const zdt = Temporal.ZonedDateTime.from("2026-02-17T14:30:00+01:00[Europe/Oslo]");
const converted = zdt.withTimeZone("America/New_York");

console.log(converted.toString());


// Note
// The exact moment stays the same, but the local clock time changes.