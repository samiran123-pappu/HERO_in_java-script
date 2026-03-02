import { Temporal } from "@js-temporal/polyfill";

const date = new Temporal.PlainDate(2026, 5, 17);
console.log(`normal date: ${date}`); // Output: 2026-05-17


// Note
// A PlainDate object is essentially the date part of a Temporal.PlainDateTime object, with the time information removed.

// The Temporal.PlainDate Object
// The Temporal.PlainDate object has 16 properties of calendar date information.

// These include calendar identification, day/month/year details, era information and other calendar metrics:

// Property------------------------>	Description
// calendarID------------------->	Calendar system identifier ("iso8601")
// day------------------->	The day as an integer (1-31)
// dayOfWeek------------------->	The day of the week as an integer (1 = Monday)
// dayOfYear------------------->	The ordinal day of the year
// daysInMonth------------------->	The total number of days in that month
// daysInWeek------------------->	The total number of days in that week
// daysInYear------------------->	The total number of days in that year
// era------------------->	The era name of the calendar, if applicable
// eraYear------------------->	The year within the era, if applicable
// inLeapYear------------------->	A boolean indicating if the year is a leap year
// month------------------->	The month as an integer (1-12)
// monthCode------------------->	A string code for the month ("M01")
// monthsInYear------------------->	The total number of months in that year
// weekOfYear------------------->	The week number within the year
// year	The year-------------------> as an integer
// yearOfWeek------------------->	The year that the week belongs to


const date2 = Temporal.PlainDate.from('2026-05-18');

const calendarID = date2.calendarID;
console.log("calendarID: " + calendarID);
const day = date2.day;
console.log("day: " + day);
const dayOfWeek = date2.dayOfWeek;
console.log("dayOfWeek: " + dayOfWeek);
const dayOfYear = date2.dayOfYear;
console.log("dayOfYear: " + dayOfYear);
const daysInMonth = date2.daysInMonth;
console.log("daysInMonth: " + daysInMonth);
const daysInWeek = date2.daysInWeek;
console.log("daysInWeek: " + daysInWeek);
const daysInYear = date2.daysInYear;
console.log("daysInYear: " + daysInYear);
const era = date2.era;
console.log("era: " + era);
const eraYear = date2.eraYear;
console.log("eraYear: " + eraYear);
const inLeapYear = date2.inLeapYear;    
console.log("inLeapYear: " + inLeapYear);
const monthCode = date2.monthCode;
console.log("monthCode: " + monthCode);
const monthsInYear = date2.monthsInYear;
console.log("monthsInYear: " + monthsInYear);
const weekOfYear = date2.weekOfYear;
console.log("weekOfYear: " + weekOfYear);
const yearOfWeek = date2.yearOfWeek;
console.log("yearOfWeek: " + yearOfWeek);

    


// Note
// A PlainDate object is essentially the date part of a Temporal.PlainDateTime object, with the time information removed.