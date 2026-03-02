console.log("1", ["a", "b", "c"].reduceRight((acc, ch) => acc + ch));
console.log("2", ["a", "b", "c"].reduce((acc, ch) => acc + ch));
console.log("3", [1, 2, 3].reduceRight((acc, ch) => acc + ch, ""));
console.log("4", [1, 2, 3].reduceRight((acc, ch) => acc + ch, 0));
console.log("5", [1, 2, 3].reduceRight((acc, ch) => acc + ch));
console.log("6", [1, 2, 3].reduce((acc, ch) => acc + ch));

