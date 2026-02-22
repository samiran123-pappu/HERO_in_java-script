// Months are 0-based (4 = May)
const d = new Date(2026, 4, 1);

console.log(d.toISOString()); // 2026-05-01T00:00:00.000Z (in UTC, may show differently in local time zone)
// Might be 2026-04-30T22:00:00.000Z in some time zones:



// Temporal.PlainDate is not a timestamp.
// It is just "2026-05-01" with no time and no time zone, so there can not be any shifting.
