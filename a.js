import { Temporal } from "@js-temporal/polyfill";


const date = Temporal.PlainDate.from("2026-05-17");
const date1 = Temporal.PlainDateTime.from("2026-05-17T12:00:00");
const date2 = Temporal.PlainMonthDay.from("--05-17");
const date3 = Temporal.PlainYearMonth.from("2026-05");
const date4 = Temporal.PlainTime.from("12:00:00");
const date5 = Temporal.ZonedDateTime.from("2026-05-17T12:00:00Z[UTC]");
const date6 = Temporal.Duration.from("P1Y2M3DT4H5M6S");
const date7 = Temporal.Instant.from("2026-05-17T12:00:00Z");
// const date8 = Temporal.Calendar.from("gregory");
// const date9 = Temporal.TimeZone.from("America/New_York");
const date10 = Temporal.Now.plainDateISO();
const date11 = Temporal.Now.plainDateTimeISO();
const date12 = Temporal.Now.zonedDateTimeISO("America/New_York");
const date13 = Temporal.Now.instant();

console.log("1", date.toString());
console.log("2", date1.toString());
console.log("3", date2.toString());
console.log("4", date3.toString());
console.log("5", date4.toString());
console.log("6", date5.toString());
console.log("7", date6.toString());
console.log("8", date7.toString());
// console.log(date8.toString());
// console.log(date9.toString());
console.log("10", date10.toString());
console.log("11", date11.toString());
console.log("12", date12.toString());
console.log("13", date13.toString());




// Now the UTC ones
const date14 = Temporal.Now.plainDateUTC();
const date15 = Temporal.Now.plainDateTimeUTC();
const date16 = Temporal.Now.zonedDateTimeUTC();
const date17 = Temporal.Now.instant();

console.log("14", date14.toString());
console.log("15", date15.toString());
console.log("16", date16.toString());
console.log("17", date17.toString());


