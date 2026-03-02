import { Temporal } from "@js-temporal/polyfill";

let d = Temporal.PlainDate.from("2026-05-01");

// These all show the meaningful content:
console.log(d.toString());          // "2026-05-01"
console.log(`${d}`);                // same as above (toString() is called)
console.log(d.year, d.month, d.day); // 2026 5 1

let next = d.add({ days: 7 });
console.log(next.toString());       // "2026-05-08"

// Or more detailed:
console.log(d);                     // PlainDate [Temporal.PlainDate] {}   ← still compact
console.dir(d);                     // usually shows more fields
console.log(JSON.stringify(d, null, 2)); // sometimes works, but not always best