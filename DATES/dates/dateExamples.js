// 1. Current date and time
let date1 = new Date();
console.log("1. Current Date:", date1);

// 2. Date from date string
let date2 = new Date("2026-02-21");
console.log("2. From Date String:", date2);

// 3. Year and Month (month is 0-based)
let date3 = new Date(2026, 1);
console.log("3. Year, Month:", date3);

// 4. Year, Month, Day
let date4 = new Date(2026, 1, 21);
console.log("4. Year, Month, Day:", date4);

// 5. Year, Month, Day, Hours
let date5 = new Date(2026, 1, 21, 10);
console.log("5. + Hours:", date5);

// 6. Year, Month, Day, Hours, Minutes
let date6 = new Date(2026, 1, 21, 10, 30);
console.log("6. + Minutes:", date6);

// 7. Year, Month, Day, Hours, Minutes, Seconds
let date7 = new Date(2026, 1, 21, 10, 30, 45);
console.log("7. + Seconds:", date7);

// 8. Year, Month, Day, Hours, Minutes, Seconds, Milliseconds
let date8 = new Date(2026, 1, 21, 10, 30, 45, 500);
console.log("8. + Milliseconds:", date8);

// 9. Milliseconds since January 1, 1970
let date9 = new Date(0);
console.log("9. From Milliseconds:", date9);