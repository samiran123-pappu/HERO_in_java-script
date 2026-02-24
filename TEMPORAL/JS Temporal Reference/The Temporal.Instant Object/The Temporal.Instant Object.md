
### The Temporal.Instant Object
```bash
Temporal.Instant is a JavaScript object representing a single point in time.

Temporal.Instant has no time zone or calendar.

Temporal.Instant stores a count of nanoseconds since the Unix epoch: January 1, 1970 00.00.
```

## Note
`Nanosecond precision is 1000 times higher than the millisecond precision of the old Date object.`


# Creating an Instant:
```bash
From------->	Code

String------->	Temporal.Instant.from('1969-07-20T20:17:00Z')
Current time------->	Temporal.Now.instant()
Epoch millisec------->	Temporal.Instant.fromEpochMilliseconds()
Epoch nanosec------->	Temporal.Instant.fromEpochNanoseconds()


Arithmetic and Comparison:
Method------>	Description
add()------>	Adds a duration (hours, minutes, seconds) to an instant
subtract()------>	Subtracts duration (hours, minutes, seconds) to an instant
compare()------>	Returns -1 if the first date is earlier, 1 if later and 0 if equal
equals()------>
```