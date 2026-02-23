// Subtract a Duration
// You can subtract a Duration using the subtract() method.

import { Temporal } from '@js-temporal/polyfill';

const duration1 = Temporal.Duration.from({ hours: 3, minutes: 30 });
const duration2 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const duration3 = duration1.subtract(duration2);
console.log(duration3.toString());



const duration12 = Temporal.Duration.from({ hours: 3, minutes: 30 });
const duration23 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const duration34 = duration12.add(duration23);
console.log(duration34.toString());

//until and since

// You can also use the until() and since() methods to find the difference between two Temporal objects as a Duration.

const date1 = Temporal.PlainDate.from('2024-01-01');
const date2 = Temporal.PlainDate.from('2024-01-10');
const durationBetween = date1.until(date2);
console.log(durationBetween.toString());



const date3 = Temporal.PlainDate.from('2024-01-01');
const date4 = Temporal.PlainDate.from('2024-01-10');
const durationBetween2 = date4.since(date3);
console.log(durationBetween2.toString());




// You can create a Duration using an object.
const duration = Temporal.Duration.from({
  years: 1,
  months: 2,
  weeks: 3,
  days: 4,
  hours: 5,
  minutes: 6,
  seconds: 7,
  milliseconds: 8,
  microseconds: 9,
  nanoseconds: 10,
});
console.log(duration.toString());
console.log(duration.years); 
console.log(duration.months);
console.log(duration.weeks);
console.log(duration.days);
console.log(duration.hours);
console.log(duration.minutes);
console.log(duration.seconds);
console.log(duration.milliseconds);
console.log(duration.microseconds);
console.log(duration.nanoseconds);