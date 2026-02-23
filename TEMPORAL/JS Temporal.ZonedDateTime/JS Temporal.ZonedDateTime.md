# JS Temporal.ZonedDateTime
Handle Time Zones Correctly
What You Will Learn:
How to use JavaScript Temporal.ZonedDateTime
How to handle time zones correctly
How to add and subtract date
How to avoid DST (Daylight Saving Time) bugs
How to convert between time zones safely


# Note
A Temporal.ZonedDateTime represents a date and time with a time zone.

It is the safest way to handle international date and time calculations.

# Why ZonedDateTime Is Important
Time zones and daylight saving time (DST) can cause serious bugs when using Date.

ZonedDateTime solves this by always storing the time zone together with the date and time.

ZonedDateTime is a timezone and calendar-aware date/time object that represents a real time event from the perspective of a particular region on Earth.

The Temporal.ZonedDateTime object is optimized for cases that require a time zone, DST-safe arithmetic and interoperability with an RFC 5545 calendar.


# Note
The exact moment stays the same, but the local clock time changes.

# Note
The time zone name is written inside square brackets.



# When to Use ZonedDateTime
International applications.

Booking systems.

Flight or travel systems.

Applications that must handle DST correctly.

Any system where time zones matter.

# ZonedDateTime vs PlainDateTime


# Type	---------------->Includes Time Zone	<--------Use Case
```bash
PlainDateTime--------------->No<----------Local scheduling without conversion
ZonedDateTime-------------->Yes <-----------International or DST-aware systems
```
Summary
Temporal.ZonedDateTime is the safest way to handle date and time with time zones.

It prevents common DST bugs and makes time zone conversions clear and predictable.

# Next Chapter
JavaScript Temporal Duration.