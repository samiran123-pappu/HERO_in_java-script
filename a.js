import { Temporal } from "@js-temporal/polyfill";

let d = new Date(2026, 0, 17); // Month 0 = January
console.log(d); // Output: Sat Jan 17 2026 00:00:00 GMT+0000 (Coordinated Universal Time)


let d2 = Temporal.PlainDate.from('2026-01-17');
console.log(`${d2}`); // Output: 2026-01-17