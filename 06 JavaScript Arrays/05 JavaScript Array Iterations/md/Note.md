# JavaScript Array Iteration Methods

```bash
# Base arrays
const nums = [1, 2, 3, 4];
const users = ["Samir", "Asha", "John"];

# 1) forEach
nums.forEach((n, i) => console.log(i, n));
# Output:
# 0 1
# 1 2
# 2 3
# 3 4

# 2) map
console.log(nums.map(n => n * 2));
# Output: [ 2, 4, 6, 8 ]

# 3) flatMap
console.log(nums.flatMap(n => [n, n * 10]));
# Output: [ 1, 10, 2, 20, 3, 30, 4, 40 ]

# 4) filter
console.log(nums.filter(n => n % 2 === 0));
# Output: [ 2, 4 ]

# 5) reduce
console.log(nums.reduce((sum, n) => sum + n, 0));
# Output: 10

# 6) reduceRight
console.log(["a", "b", "c"].reduceRight((acc, ch) => acc + ch, ""));
# Output: cba

# 7) every
console.log(nums.every(n => n > 0));
# Output: true

# 8) some
console.log(nums.some(n => n > 3));
# Output: true

# 9) Array.from
console.log(Array.from("hello"));
# Output: [ 'h', 'e', 'l', 'l', 'o' ]

# 10) keys
console.log([...users.keys()]);
# Output: [ 0, 1, 2 ]

# 11) entries
console.log([...users.entries()]);
# Output: [ [ 0, 'Samir' ], [ 1, 'Asha' ], [ 2, 'John' ] ]

# 12) with
const a = [10, 20, 30];
console.log(a.with(1, 99));
console.log(a);
# Output:
# [ 10, 99, 30 ]
# [ 10, 20, 30 ]

# 13) Spread (...)
const x = [1, 2];
const y = [3, 4];
console.log([...x, ...y]);
# Output: [ 1, 2, 3, 4 ]

# 14) Rest (...)
const [first, ...rest] = [100, 200, 300, 400];
console.log(first);
console.log(rest);
function sum(...vals) {
  return vals.reduce((a, b) => a + b, 0);
}
console.log(sum(5, 10, 15));
# Output:
# 100
# [ 200, 300, 400 ]
# 30
```
