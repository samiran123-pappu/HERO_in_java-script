# JavaScript Date Set Methods

Track: **13 JavaScript Date**

## Modifying Dates

Set methods are used to set a part of a date object.

- `setFullYear()`
- `setMonth()`
- `setDate()`
- `setHours()`
- `setMinutes()`
- `setSeconds()`

```js
const d = new Date();
d.setFullYear(2020);
```

## Date Math

You can easily add days to a date using `setDate()`.

```js
const d = new Date();
d.setDate(d.getDate() + 50); // Adds 50 days
```

JavaScript handles the overflow automatically (e.g., if you add 50 days to Dec 20th, it rolls over to the next year correctly).

## Comparing Dates

Dates can be compared using standard comparison operators (`>`, `<`).

```js
if (today > someday) {
  text = "Today is after someday";
}
```

---
*End of Track 13.*