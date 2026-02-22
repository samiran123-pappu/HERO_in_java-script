import { Temporal } from "@js-temporal/polyfill";

const date = new Temporal.PlainDate(2026, 5, 17);
console.log(date.year);
console.log(date.month);


const date1 = Temporal.PlainDate.from('2026-05-17');
console.log(date1.year); 
console.log(date1.month);