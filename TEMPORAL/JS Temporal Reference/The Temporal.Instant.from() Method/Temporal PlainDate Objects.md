### Temporal PlainDate Objects
```bsh
A Temporal.PlainDate object in JavaScript represents a calendar date (year, month, and day) without a specific time zone, typically in ISO 8601 format ("2026-05-01").

It is used for dates that remain the same regardless of time zone, such as birthdays or holidays:
```

## Object	Description
```bash
Temporal.PlainDate	Calendar date only (2026-05-21)
Temporal.PlainTime	Time of day only (14:30:00)
Temporal.PlainMonthDay	Month and day only (05-01)
Temporal.PlainYearMonth	Year and month only (2026-05)
The Temporal.PlainDate Object
The Temporal.PlainDate object has 16 properties of calendar date information.

These include calendar identification, day/month/year details, era information and other calendar metrics:
```

# Property	Description
```bash
calendarID	Calendar system identifier ("iso8601")
day	The day as an integer (1-31)
dayOfWeek	The day of the week as an integer (1 = Monday)
dayOfYear	The ordinal day of the year
daysInMonth	The total number of days in that month
daysInWeek	The total number of days in that week
daysInYear	The total number of days in that year
era	The era name of the calendar, if applicable
eraYear	The year within the era, if applicable
inLeapYear	A boolean indicating if the year is a leap year
month	The month as an integer (1-12)
monthCode	A string code for the month ("M01")
monthsInYear	The total number of months in that year
weekOfYear	The week number within the year
year	The year as an integer
yearOfWeek	The year that the week belongs to
```