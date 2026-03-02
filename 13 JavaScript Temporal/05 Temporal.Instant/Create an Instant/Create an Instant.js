import { Temporal } from "@js-temporal/polyfill";
const now = Temporal.Now.instant();

console.log(now.toString()); 

// This returns the exact current moment in UTC.
// 2026-02-22T14:57:28.075Z
// 2026-02-22T14:58:34.269314253Z
// 1771772248075

