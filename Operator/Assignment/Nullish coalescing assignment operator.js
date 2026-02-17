let x1;
x1 ??= 10;
console.log(x1);


let x2 = 0;
x2 ??= 10;
console.log(x2);


let x3 = null;
x3 ??= 10;
console.log(x3);


let x4 = undefined;
x4 ??= 10;
console.log(x4);

let x = 10;
let y = 5;
x ??= y;
console.log(x);
console.log(y);