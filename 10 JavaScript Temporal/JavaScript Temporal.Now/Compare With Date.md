# Compare With Date
With Date, you only get one type of object.

# Date Example
# let d = new Date();
# Temporal gives you separate types depending on what you need.

Instant - Exact moment in UTC.

PlainDate - Date only.

PlainDateTime - Date and time without zone.

ZonedDateTime - Date and time with zone.

When to Use Each Method
Use instant() for timestamps and comparisons.

Use plainDateISO() for birthdays and calendar dates.

Use plainDateTimeISO() for local scheduling.

Use zonedDateTimeISO() for international or time zone-aware applications.

# Summary
Temporal.Now provides clear and flexible ways to get the current date and time.

You can choose the exact type you need instead of using one general-purpose object.

<!-- Next Chapter
JavaScript Temporal Instant. -->