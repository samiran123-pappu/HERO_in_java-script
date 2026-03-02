# Nanosecond Precision
Unlike the Date object which uses milliseconds, Temporal.Instant offers 1000 times higher nanosecond precision.

# Clear Separation of Types
Date represents both a date and a time in one object.

Temporal separates different use cases into different types.

Temporal.Instant - Exact moment in time (UTC).

Temporal.PlainDate - Date only.

Temporal.PlainDateTime - Date and time without time zone.

Temporal.ZonedDateTime - Date and time with time zone.

Temporal.Duration - Length of time.

This makes code easier to read and less error-prone.