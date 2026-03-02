// Convert from Instant
// An Instant represents a UTC moment.

// You can convert it to a ZonedDateTime in a specific time zone.

import { Temporal } from "@js-temporal/polyfill";

const instant = Temporal.Now.instant();

const zoned = instant.toZonedDateTimeISO("Europe/Oslo");

console.log(zoned.toString());
