
// Add Months
// Temporal automatically handles different month lengths.

import { Temporal } from '@js-temporal/polyfill';

const date = Temporal.PlainDate.from('2024-01-31');
const newDate = date.add({ months: 1 });
console.log(newDate.toString());
// The original date is not changed.