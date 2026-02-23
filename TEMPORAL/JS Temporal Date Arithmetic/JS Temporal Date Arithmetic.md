# JS Temporal Date Arithmetic
```bash
Add and Subtract Dates Safely
The Temporal API provides methods for easy and reliable date and time arithmetic.

Learn how to add and subtract dates safely using JavaScript Temporal.

Perform date arithmetic without DST bugs or mutation problems.
```

# Note
```bash
Temporal provides safe and clear methods for date arithmetic.

You can add or subtract days, months, years, and more without modifying the original value.
```
```bash
Supported Units
You can add or subtract various time units using a duration object:

years
months
weeks
days
hours
minutes
seconds
milliseconds
microseconds
nanoseconds
Note
Unlike the legacy Date object, Temporal objects are immutable.

Methods like until(), add(), or with() always return a new instance rather than modifying the existing one.

Temporal Add and Subtract
Both methods are immutable, returning new Temporal objects.

Both methods accept an object with duration properties { days: 7, hours: 1 } as input.

Both methods handles date boundaries: adding one day to March 31st is April 1st.
```