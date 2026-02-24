### Main Temporal Objects
```bash
Temporal objects are the core part of the Temporal API which aims to replace the old Date object.

All Temporal objects are immutable, which helps prevent bugs related to accidental modification of time values
```

## Object	Description
```bash
Temporal.Now	The current time
Temporal.ZonedDateTime	Date and time in a specific time zone
Temporal.Instant	A fixed point in time, independent of time zone
Plain Dates and Times
Temporal.PlainDate()	Calendar date only (2026-05-21)
Temporal.PlainTime()	Time of day only (14:30:00)
Temporal.PlainDateTime()	Full date and time (2026-01-24 14:30:00)
Temporal.PlainYearMonth()	Year and month only (2026-05)
Temporal.PlainMonthDay()	Month and day only (05-01)
```