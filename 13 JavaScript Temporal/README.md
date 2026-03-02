# 13 JavaScript Temporal

## Modern Date & Time

`Temporal` is a new global object (currently in Stage 3 proposal) that provides standard objects and functions for working with dates and times. It fixes many of the issues with the legacy `Date` object.

## 📚 Topics

1.  **01 Why Temporal**
    *   Issues with `Date` (mutability, parsing, 0-indexed months).
    *   Immutable objects.

2.  **02 Temporal Types**
    *   `Temporal.Now`: Current time.
    *   `Temporal.PlainDate`: Date without time/timezone.
    *   `Temporal.PlainTime`: Time without date/timezone.
    *   `Temporal.ZonedDateTime`: Full date/time with timezone.

3.  **03 Duration**
    *   Calculating difference between dates.
    *   Adding/Subtracting time easily.

*Note: Since Temporal is not yet in all browsers, you might need a polyfill to run these examples.*

## 🔑 Key Takeaway

- **Immutable**: Operations return new objects.
- **Type-Safe**: Separate types for Date, Time, and DateTime.
- **Timezone-Aware**: Better handling of time zones and DST.

---
*Open `index.html` to browse these topics interactively.*