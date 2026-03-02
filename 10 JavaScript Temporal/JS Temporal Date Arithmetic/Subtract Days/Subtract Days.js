// Use subtract() to subtract time.

import { Temporal } from '@js-temporal/polyfill';

const date = Temporal.PlainDate.from('2024-01-01');
const newDate = date.subtract({ days: 365 });
console.log(newDate.toString());
// The original date is not changed.