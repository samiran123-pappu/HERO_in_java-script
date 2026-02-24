// Temporal PlainDate Objects
// A Temporal.PlainDate object in JavaScript represents a calendar date (year, month, and day) without a specific time zone, typically in ISO 8601 format ("2026-05-01").

// It is used for dates that remain the same regardless of time zone, such as birthdays or holidays:

// Object	Description
// Temporal.PlainDate	Calendar date only (2026-05-21)
// Temporal.PlainTime	Time of day only (14:30:00)
// Temporal.PlainMonthDay	Month and day only (05-01)
// Temporal.PlainYearMonth	Year and month only (2026-05)
// The Temporal.PlainDate Object
// The Temporal.PlainDate object has 16 properties of calendar date information.

// These include calendar identification, day/month/year details, era information and other calendar metrics:

// Property	Description
// calendarID	Calendar system identifier ("iso8601")
// day	The day as an integer (1-31)
// dayOfWeek	The day of the week as an integer (1 = Monday)
// dayOfYear	The ordinal day of the year
// daysInMonth	The total number of days in that month
// daysInWeek	The total number of days in that week
// daysInYear	The total number of days in that year
// era	The era name of the calendar, if applicable
// eraYear	The year within the era, if applicable
// inLeapYear	A boolean indicating if the year is a leap year
// month	The month as an integer (1-12)
// monthCode	A string code for the month ("M01")
// monthsInYear	The total number of months in that year
// weekOfYear	The week number within the year
// year	The year as an integer
// yearOfWeek	The year that the week belongs to



import { Temporal } from "@js-temporal/polyfill"

// Temporal.PlainDate	Calendar date only ("2026-02-24")
const plainDate = Temporal.PlainDate.from("2026-02-24")
console.log("1", plainDate.toString()); 

// Temporal.PlainTime	Time of day only (14:30:00)
const plainTime = Temporal.PlainTime.from("20:47:00");
console.log("2", plainTime.toString()); 

// Temporal.PlainMonthDay	Month and day only ("2026-02-24")
const plainMonthDay = Temporal.PlainMonthDay.from("2026-02-24")
console.log("3", plainMonthDay.toString()); 

// Temporal.PlainYearMonth	Year and month only ("2026-02-24")
const plainYearMonth = Temporal.PlainYearMonth.from("2026-02-24")
console.log("4", plainYearMonth.toString());

// To get human-readable components like year, month, or day, you can access the properties of the Temporal.PlainDate object.

console.log("5", plainDate.year); 
console.log("6", plainDate.month);

// The Temporal.PlainDate object has 16 properties of calendar date information.

// These include calendar identification, day/month/year details, era information and other calendar metrics:

// Property	Description

// calendarID	Calendar system identifier ("iso8601")
const calendarID = plainDate.calendarID;
console.log("7", calendarID);
// day	The day as an integer (1-31)
const day = plainDate.day;
console.log("8", day);
// dayOfWeek	The day of the week as an integer (1 = Monday)
const dayOfWeek = plainDate.dayOfWeek;
console.log("9", dayOfWeek);
// dayOfYear	The ordinal day of the year
const dayOfYear = plainDate.dayOfYear;
console.log("10", dayOfYear);
// daysInMonth	The total number of days in that month
const daysInMonth = plainDate.daysInMonth;
console.log("11", daysInMonth);
// daysInWeek	The total number of days in that week
const daysInWeek = plainDate.daysInWeek;
console.log("12", daysInWeek);

// daysInYear	The total number of days in that year
const daysInYear = plainDate.daysInYear;
console.log("13", daysInYear);

// era	The era name of the calendar, if applicable
const era = plainDate.era;
console.log("14", era);
// eraYear	The year within the era, if applicable
const eraYear = plainDate.eraYear;
console.log("15", eraYear);

// inLeapYear	A boolean indicating if the year is a leap year
const inLeapYear = plainDate.inLeapYear;
console.log("16", inLeapYear);

// month	The month as an integer (1-12)
const month = plainDate.month;
console.log("17", month);

// monthCode	A string code for the month ("M01")
const monthCode = plainDate.monthCode;
console.log("18", monthCode);

// monthsInYear	The total number of months in that year
const monthsInYear = plainDate.monthsInYear;
console.log("19", monthsInYear);

// weekOfYear	The week number within the year
const weekOfYear = plainDate.weekOfYear;
console.log("20", weekOfYear);

// year	The year as an integer
const year = plainDate.year;
console.log("21", year);

// yearOfWeek	The year that the week belongs to
const yearOfWeek = plainDate.yearOfWeek;
console.log("22", yearOfWeek);