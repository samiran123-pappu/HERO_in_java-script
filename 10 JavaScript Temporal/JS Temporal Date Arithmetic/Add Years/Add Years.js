// Add Years
// Adding years works correctly, even for leap years.

import { Temporal } from '@js-temporal/polyfill';
const date = Temporal.PlainDate.from('2020-02-29');
const newDate = date.add({ years: 1 });
console.log(newDate.toString());
// The original date is not changed.


// connst date2 = Temporal.PlainDate.