// JavaScript Temporal add()
// The add() method returns a new date moved forward by a given duration.

// Syntax
// temporal.add(duration)

// Parameters
// duration (Required) A duration to add.


import { Temporal } from '@js-temporal/polyfill';

const date = Temporal.PlainDate.from('2024-01-01');
const newDate = date.add({ days: 1099 });
console.log(newDate.toString());
// The original date is not changed.



// Example
// Create a Temporal object
const today1 = Temporal.Now.plainDateISO();

// Add a duration
const nextWeek = today1.add({ days: 7 });
// Example
// Create a Temporal object
const today2 = Temporal.Now.plainDateISO();

// Add multiple units
const newDate1 = today2.add({ years: 1, months: 2, days: 15 });

// Display the result
const demo = `New Date: ${newDate1.toString()}`;
console.log(demo);
const demo2 = `New Date: ${nextWeek.toString()}`;
console.log(demo2);



// Supported Units
// You can add or subtract various time units using a duration object:

// years
// months
// weeks
// days
// hours
// minutes
// seconds
// milliseconds
// microseconds
// nanoseconds
// Note
// Unlike the legacy Date object, Temporal objects are immutable.

// Methods like until(), add(), or with() always return a new instance rather than modifying the existing one.

// Temporal Add and Subtract
// Both methods are immutable, returning new Temporal objects.

// Both methods accept an object with duration properties { days: 7, hours: 1 } as input.

// Both methods handles date boundaries: adding one day to March 31st is April 1st.