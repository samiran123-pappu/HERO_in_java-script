# 12 JavaScript Dates

## Working with Time

JavaScript `Date` objects represent a single moment in time in a platform-independent format. Date objects contain a `Number` that represents milliseconds since 1 January 1970 UTC.

## 📚 Topics

1.  **01 Date Basics**
    *   Creating dates with `new Date()`.
    *   The 4 ways to create a date.
    *   Months are 0-indexed (0 = January).

2.  **02 Date Formats**
    *   ISO 8601 (`YYYY-MM-DD`) - The standard.
    *   Short and Long dates.
    *   Parsing date strings.

3.  **03 Date Get Methods**
    *   Getting parts of a date (`getFullYear`, `getMonth`).
    *   `getDay()` returns the day of the week (0-6).
    *   `getTime()` returns milliseconds.

4.  **04 Date Set Methods**
    *   Setting parts of a date (`setFullYear`, `setMonth`).
    *   Date math (adding days).
    *   Comparing dates.

## 🔑 Key Takeaway

- **Months count from 0**: January is 0, December is 11.
- **Days count from 0**: Sunday is 0, Saturday is 6.
- Dates are objects, so comparing them with `==` or `===` doesn't work as expected (compare `.getTime()` instead).

---
*Open `index.html` to browse these topics interactively.*