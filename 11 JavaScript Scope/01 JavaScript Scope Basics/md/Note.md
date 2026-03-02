# Why Temporal?

Track: **13 JavaScript Temporal**

## The Problem with `Date`

The legacy `Date` object in JavaScript (dating back to 1995) has several well-known issues:

1.  **Mutability**: `Date` objects are mutable. If you pass a date to a function and that function changes it, your original date is changed too.
2.  **Parsing**: `Date.parse()` is unreliable and inconsistent across browsers.
3.  **0-Indexed Months**: January is 0, December is 11. This is a constant source of off-by-one errors.
4.  **No Support for Non-UTC Timezones**: `Date` only knows UTC and the user's local time. It cannot represent "10:00 AM in Tokyo" if the user is in New York.
5.  **Computation**: Adding "1 month" is hard because months have different lengths.

## Enter `Temporal`

`Temporal` is a modern, ergonomic, and robust date/time API.

- **Immutable**: All Temporal objects are immutable. Operations like `.add()` return a new object.
- **Type-Safe**: It distinguishes between a "Calendar Date" (just a date) and an "Instant" (exact moment in time).
- **ISO-8601**: Strict adherence to standards.

## Quick Self-Check

1.  Is the legacy `Date` object mutable or immutable? (Mutable)
2.  What is the index of January in the legacy `Date` object? (0)
3.  Does `Temporal` modify the object when you add time? (No, it returns a new object)

---
*Next Topic: Temporal Types.*