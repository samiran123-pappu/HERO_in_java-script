import { Temporal } from "@js-temporal/polyfill";

const instant = Temporal.Now.instant();

const zoned = instant.toZonedDateTimeISO("Europe/Oslo");
console.log(zoned.toString());

// An Instant does not include time zone information.

// You must convert it to a ZonedDateTime to display local time.

// This converts the UTC moment to a specific time zone.

