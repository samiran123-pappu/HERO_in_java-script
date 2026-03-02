// JavaScript Temporal subtract()
// The subtract() method returns a new temporal object representing this date moved backward by a given duration.

// Syntax
// temporal.subtract(duration)
// From a Temporal.PlainDate (a date without a time zone) you can subtract a full duration:


import { Temporal } from '@js-temporal/polyfill';

const date = Temporal.PlainDate.from('2024-01-01');
const newDate = date.subtract({ days: 365 });
console.log(newDate.toString());
// The original date is not changed.