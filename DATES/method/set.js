
let custom = new Date();

custom.setFullYear(2030);
custom.setMonth(5);
custom.setDate(15);
custom.setHours(10);
custom.setMinutes(30);
custom.setSeconds(45);
custom.setMilliseconds(500);

console.log("Modified Date:", custom);

console.log("===== SET UTC METHODS =====");

let utcCustom = new Date();

utcCustom.setUTCFullYear(2040);
utcCustom.setUTCMonth(8);
utcCustom.setUTCDate(20);
utcCustom.setUTCHours(12);
utcCustom.setUTCMinutes(40);
utcCustom.setUTCSeconds(55);
utcCustom.setUTCMilliseconds(900);

console.log("Modified UTC Date:", utcCustom);

console.log("===== STRING CONVERSIONS =====");

console.log("toString():", now.toString());
console.log("toDateString():", now.toDateString());
console.log("toTimeString():", now.toTimeString());
console.log("toUTCString():", now.toUTCString());
console.log("toISOString():", now.toISOString());
console.log("toJSON():", now.toJSON());
console.log("toLocaleString():", now.toLocaleString());
console.log("toLocaleDateString():", now.toLocaleDateString());
console.log("toLocaleTimeString():", now.toLocaleTimeString());

console.log("===== VALUE METHODS =====");

console.log("valueOf():", now.valueOf());
console.log("constructor:", now.constructor);
console.log("prototype:", Date.prototype);