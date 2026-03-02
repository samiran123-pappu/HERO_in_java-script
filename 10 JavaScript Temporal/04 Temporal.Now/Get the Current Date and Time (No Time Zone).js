import {Temporal} from '@js-temporal/polyfill';
let dateTime = Temporal.Now.zonedDateTimeISO();
console.log(dateTime.toString()); // "2024-06-01T12:34:56.789" (example output)

// This is useful when you need local date and time but not time zone calculations.

