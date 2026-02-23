// Duration vs Date Math
// With Date, you often calculate time differences manually using milliseconds


const date1 = new Date("2020-01-01");
const date2 = new Date("2020-02-01");
const differenceInMilliseconds = date2 - date1;
const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
console.log(differenceInDays);


// Note
// Temporal provides built-in methods that are clearer and safer.
