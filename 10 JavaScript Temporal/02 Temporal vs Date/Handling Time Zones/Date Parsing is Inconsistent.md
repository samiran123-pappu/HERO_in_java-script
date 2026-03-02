# Date Parsing is Inconsistent
new Date("2026-05-01") parses as an instant (often treated as UTC by spec in modern JS), but historically it has been a minefield of different formats, browser quirks and locale surprises.

Temporal avoids this by:

defining strict parsing rules for ISO strings
using Temporal.Instant.from() for clearly-typed conversions