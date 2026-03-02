let x = 10;

x += 5;
x -= 2;
x *= 3;
x /= 2;
x %= 4;
x **= 2;

console.log("numeric assignment result:", x);

let text = "Hello";
text += " World";
console.log("string += result:", text);

let a = 0;
a ||= 10; // assigns because a is falsy

let b;
b ??= 20; // assigns because b is undefined

let c = 1;
c &&= 30; // assigns because c is truthy

console.log({ a, b, c });
