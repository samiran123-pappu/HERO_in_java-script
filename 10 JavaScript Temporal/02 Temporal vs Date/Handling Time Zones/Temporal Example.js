import { Temporal } from "@js-temporal/polyfill";

const now = Temporal.Now.zonedDateTimeISO();

console.log("Default:", now.toString());
// → 2026-02-22T15:14:50+05:30[Asia/Calcutta]

console.log("No zone name:", now.toString({ timeZoneName: "never" }));
// → 2026-02-22T15:14:50+05:30

console.log("Custom (manual):", 
  `${now.year}-${now.month.toString().padStart(2,'0')}-${now.day.toString().padStart(2,'0')} ` +
  `${now.hour.toString().padStart(2,'0')}:${now.minute.toString().padStart(2,'0')} ` +
  `(${now.offset})`
);
// → 2026-02-22 15:14 (+05:30)