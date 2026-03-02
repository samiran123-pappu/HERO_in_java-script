// Duration vs Date Math
// With Date, you often calculate time differences manually using milliseconds


const date1 = new Date("2020-01-01");
const date2 = new Date("2020-02-01");
const differenceInMilliseconds = date2 - date1;
const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
console.log(differenceInDays);



import { Temporal } from "@js-temporal/polyfill";
const date3 = Temporal.PlainDate.from("2020-01-01");
const date4 = Temporal.PlainDate.from("2020-02-01");
const duration = date3.until(date4);
console.log(duration.toString());



const date5 = Temporal.PlainDate.from("2020-01-01");
const date6 = Temporal.PlainDate.from("2020-02-01");
const duration2 = date6.since(date5);
console.log(duration2.toString());

// Note
// Temporal provides built-in methods that are clearer and safer.
