// Add Days
// Use the add() method to add days.

import { Temporal } from '@js-temporal/polyfill';

const date = Temporal.PlainDate.from('2024-01-01');
const newDate = date.add({ days: 1099 });
console.log(newDate.toString());
// The original date is not changed.

