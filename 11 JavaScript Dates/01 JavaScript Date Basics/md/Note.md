# JavaScript Date Basics

- `Date` objects represent a specific moment in time.
- The object is static after creation (it does not auto-update).
- JavaScript stores time as milliseconds from `1970-01-01T00:00:00Z`.

## Constructors

- `new Date()`
- `new Date(dateString)`
- `new Date(year, month, day, hours, minutes, seconds, ms)`
- `new Date(milliseconds)`

## Important rules

- Month is zero-based: January = 0, December = 11.
- Overflow is auto-adjusted (e.g. month 15 moves to next year).
- One numeric argument is treated as milliseconds, not year/month.
