```bash
Duration Formats
Duration objects can be parsed as a string using the ISO 8601 duration format.

It has the following form (spaces are only for readability):

+P nY nM nW nD T nH nM nS
For example, "P3Y6M4DT12H30M5S" represents a duration of "three years, six months, four days, twelve hours, thirty minutes, and five seconds".

Code	Description
+	Optional +/- sign for positive/negative duration. Default is +.
P	Duration designator (for period)
nY	Number of calendar years
nM	Number of calendar months
nW	Number of weeks
nD	Number of calendar days
T	Time designator (precedes time components)
nH	Number of hours
nM	Number of minutes
nS	Number of seconds
```