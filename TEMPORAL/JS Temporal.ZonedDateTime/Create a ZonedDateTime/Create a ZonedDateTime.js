import { Temporal } from '@js-temporal/polyfill';
const zonedDate = Temporal.ZonedDateTime.from({
  timeZone: 'America/Los_Angeles',
  year: 1995,
  month: 12,
  day: 7,
  hour: 3,
  minute: 24,
  second: 30,
  millisecond: 0,
  microsecond: 3,
  nanosecond: 500
});

console.log(zonedDate.toString().split(" "));