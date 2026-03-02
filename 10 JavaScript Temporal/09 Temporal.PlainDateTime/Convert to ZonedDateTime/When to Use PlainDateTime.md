# When to Use PlainDateTime
Local event scheduling.

Appointments without international time zone handling.

Forms that collect date and time.

Applications where time zone conversion is not required.

If you need full time zone awareness, use ZonedDateTime instead.

# Summary
Temporal.PlainDateTime represents a date and time without time zone information.

It is immutable, easy to compare, and safer than using Date for local date-time values.

# Next Chapter
JavaScript Temporal ZonedDateTime.