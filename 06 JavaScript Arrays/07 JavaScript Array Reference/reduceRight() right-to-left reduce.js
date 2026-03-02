var arr = [0, 1, 2, 3, 4];
console.log(arr.reduceRight((e, r) => r + e))
console.log(arr.reduceRight((e, r) => r + e, " "))
console.log(arr.reduceRight((e, r) => r + e, 0))
console.log(arr.reduce((e, r) => r + e))
console.log(arr.reduce((e, r) => r + e, 10))
console.log(arr.reduce((e, r) => r + e, 0))
console.log(arr.reduce((e, r) => r + e, " "))