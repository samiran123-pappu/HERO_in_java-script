# JavaScript Date Formats

## Input types

- ISO: `YYYY-MM-DD` (recommended)
- Short: `MM/DD/YYYY` (can be browser dependent)
- Long: `Mar 25 2015` or `25 Mar 2015`

## Safer practice

- Prefer ISO strings for predictable parsing.
- Be careful with ambiguous formats like `YYYY/MM/DD` or `DD-MM-YYYY`.

## Parsing

- `Date.parse(string)` returns milliseconds from Unix epoch.
- Use `new Date(Date.parse(...))` to convert back to Date.
