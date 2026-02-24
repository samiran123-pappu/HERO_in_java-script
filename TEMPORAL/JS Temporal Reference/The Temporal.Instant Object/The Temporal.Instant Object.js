
// The Temporal.Instant Object
// Temporal.Instant is a JavaScript object representing a single point in time.

// Temporal.Instant has no time zone or calendar.

// Temporal.Instant stores a count of nanoseconds since the Unix epoch: January 1, 1970 00.00.

// Note
// Nanosecond precision is 1000 times higher than the millisecond precision of the old Date object.


// Creating an Instant:

// From	Code

// String	Temporal.Instant.from('1969-07-20T20:17:00Z')
// Current time	Temporal.Now.instant()
// Epoch millisec	Temporal.Instant.fromEpochMilliseconds()
// Epoch nanosec	Temporal.Instant.fromEpochNanoseconds()
// Arithmetic and Comparison:

// Method	Description

// add()	Adds a duration (hours, minutes, seconds) to an instant
// subtract()	Subtracts duration (hours, minutes, seconds) to an instant
// compare()	Returns -1 if the first date is earlier, 1 if later and 0 if equal
// equals()


// Returns true if the two instants are equal, false otherwise
// toString()	Returns an ISO 8601 string representation of the instant





import { Temporal } from "@js-temporal/polyfill";

// String	Temporal.Instant.from('1969-07-20T20:17:00Z')
const instant = Temporal.Instant.from("1969-07-20T20:17:00Z");
// Current time	Temporal.Now.instant()
const currentInstant = Temporal.Now.instant();
// Epoch millisec	Temporal.Instant.fromEpochMilliseconds()
const epochInstant = Temporal.Instant.fromEpochMilliseconds(0);
// Epoch nanosec	Temporal.Instant.fromEpochNanoseconds()
const epochNanoInstant = Temporal.Instant.fromEpochNanoseconds(0);
// add()
const addedInstant = instant.add({ hours: 2, minutes: 30 });
console.log(addedInstant.toString());
// subtract()
const subtractedInstant = instant.subtract({ hours: 1, minutes: 15 });
console.log(subtractedInstant.toString());
// compare()
const comparisonResult = Temporal.Instant.compare(instant, currentInstant);
console.log(comparisonResult);
// equals()
const isEqual = instant.equals(epochInstant);
console.log(isEqual);
// toString()
console.log(instant.toString());

console.log(epochInstant.toString());
console.log(epochNanoInstant.toString());

console.log(instant.toString());
console.log(currentInstant.toString());

console.log(instant.toString());