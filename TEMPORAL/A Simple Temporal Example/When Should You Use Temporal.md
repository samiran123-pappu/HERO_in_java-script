# When Should You Use Temporal?
```bash

Use Temporal when you need reliable date and time handling.

You need correct time zone support.

You want safe date arithmetic (add or subtract days, months, years).

You want to avoid DST bugs.

You want predictable and readable code.

You may still use Date for very simple tasks, or when you must support environments where Temporal is not available.
```

# Temporal Object Types
```bash
Temporal includes several object types for different kinds of date and time values:

Temporal.Instant - An exact moment in time (UTC timestamp).

Temporal.PlainDate - A date only (year, month, day).

Temporal.PlainDateTime - Date and time without a time zone.

Temporal.ZonedDateTime - Date and time with a time zone.

Temporal.Duration - A length of time (days, hours, minutes).

In this tutorial, you will learn how each type works and when to use 
```

# Summary
```bash
Temporal is the modern way to work with dates and times in JavaScript.

Temporal fixes common Date problems like time zones, DST bugs, and confusing date math.

```



```javascript
if (isAwesome){
 return true
}
```

`This is a code snippet.`
[Watch Full Tutorial on Youtube](https://youtu.be/4sbklcQ0EXc)
[](https://youtu.be/4sbklcQ0EXc)