const text = "Cats, cats, CATS";
const items = [...text.matchAll(/cats/gi)];
console.log(items.map(m => m[0] + "@" + m.index));
