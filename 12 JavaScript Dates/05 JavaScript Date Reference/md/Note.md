# JavaScript Date Reference

Track: **12 JavaScript Dates**

## Core Idea

- Date/time code must be explicit about timezone, formatting, and arithmetic behavior.
- `Date` and `Temporal` APIs differ; Temporal is safer and more explicit for modern workflows.

## Syntax Patterns

- Date construction: `new Date(...)`; Temporal examples: `Temporal.Now.*`, `Temporal.PlainDate.*`.
- Prefer ISO strings and explicit conversion steps.

## Common Mistakes

- Parsing ambiguous date strings or doing timezone-sensitive logic without explicit zone handling.

## How To Study This Topic

- Read the HTML example heading and predict the expected result first.
- Run the `.js` file and verify each variable/value transition.
- Open the `.html` file and compare visible output with your prediction.
- Change one line and rerun to observe cause/effect clearly.

## Quick Self-Check

- Can I explain this topic in one sentence without reading code?
- Can I write a minimal working example from memory?
- Can I name one common bug and how to avoid it?
## Learning Path

- Prerequisite: **JavaScript Date Set Methods**
- Next Topic: **None (last topic in this track)**

## Mini Exercises

1. Write one small code example from this topic without looking at notes.
2. Modify one existing example so it fails, then fix it and explain why.
3. Explain this topic in 3-5 lines as if teaching a beginner.
