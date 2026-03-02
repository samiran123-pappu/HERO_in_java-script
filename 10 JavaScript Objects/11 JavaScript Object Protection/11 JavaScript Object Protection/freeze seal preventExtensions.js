const a = { x: 1 };
Object.preventExtensions(a);
a.y = 2;

const b = { x: 1 };
Object.seal(b);
delete b.x;

const c = { x: 1 };
Object.freeze(c);
c.x = 9;

console.log(a, b, c);
