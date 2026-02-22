import { Temporal } from "@js-temporal/polyfill";

let a = Temporal.Now.plainDateISO();
console.log(`${a}`); // Output: current date in ISO format (e.g., 2024-06-17)