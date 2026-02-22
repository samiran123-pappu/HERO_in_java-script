# The Temporal.PlainDate.from()method above:

Parses the input using ISO 8601 parsing rules
Accepts strings: "2026-05-01"
Accepts objects: { year:2026, month:5, day:1 }
Accepts temporal: PlainDate
Returns a calendar date without a time like 2026-05-17.
Note
Parsing means validation pluss automatic conversion.




# The Temporal.PlainDate() method above:

Uses a constructor call
Expects numeric arguments (year, month, day).
Returns a calendar date without a time like 2026-05-17.
Note
Unlike Date, months start at 1.