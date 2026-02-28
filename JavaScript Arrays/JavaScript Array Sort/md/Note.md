# JavaScript Array Sort
## Alphabetic Sort
```bash
Array sort()
Array reverse()
Array toSorted()
Array toReversed()
Sorting Objects
Numeric Sort
Numeric Sort
Random Sort
Math.min()
Math.max()
Home made Min()
Home made Max()
```

```javascript
// 1) Array sort() (default: string/alphabetical)
const fruits = ["Banana", "Apple", "Cherry", "Mango"];
console.log("sort() before:", fruits);
fruits.sort();
console.log("sort() after :", fruits);

// 2) Array reverse()
const letters = ["A", "B", "C", "D"];
console.log("reverse() before:", letters);
letters.reverse();
console.log("reverse() after :", letters);

// 3) Array toSorted() (non-mutating sort)
const nums1 = [40, 5, 100, 25];
const sortedCopy = nums1.toSorted((a, b) => a - b);
console.log("toSorted() original:", nums1);
console.log("toSorted() new     :", sortedCopy);

// 4) Array toReversed() (non-mutating reverse)
const nums2 = [1, 2, 3, 4];
const reversedCopy = nums2.toReversed();
console.log("toReversed() original:", nums2);
console.log("toReversed() new     :", reversedCopy);

// 5) Sorting Objects
const users = [
  { name: "John", age: 30 },
  { name: "Alice", age: 22 },
  { name: "Bob", age: 25 }
];
const byAge = users.toSorted((a, b) => a.age - b.age);
const byName = users.toSorted((a, b) => a.name.localeCompare(b.name));
console.log("Sorting Objects by age :", byAge);
console.log("Sorting Objects by name:", byName);

// 6) Numeric Sort (ascending)
const nums3 = [40, 100, 1, 5, 25, 10];
const asc = nums3.toSorted((a, b) => a - b);
console.log("Numeric Sort asc :", asc);

// 7) Numeric Sort (descending)
const desc = nums3.toSorted((a, b) => b - a);
console.log("Numeric Sort desc:", desc);

// 8) Random Sort (shuffle-style using sort)
const nums4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const randomSort = nums4.toSorted(() => Math.random() - 0.5);
console.log("Random Sort:", randomSort);

// 9) Math.min()
const nums5 = [7, 2, 9, 4];
console.log("Math.min(...nums5):", Math.min(...nums5));

// 10) Math.max()
console.log("Math.max(...nums5):", Math.max(...nums5));

// 11) Home made Min()
function homeMin(arr) {
  let min = arr[0];
  for (const n of arr) {
    if (n < min) min = n;
  }
  return min;
}
console.log("Home made Min():", homeMin(nums5));

// 12) Home made Max()
function homeMax(arr) {
  let max = arr[0];
  for (const n of arr) {
    if (n > max) max = n;
  }
  return max;
}
console.log("Home made Max():", homeMax(nums5));
```


# Note
```bash
Basically see basically without the function like like inside the method without the function it would probably 
```
```bash
consider the letters or the numbers with the ascending orders but with the function inside it will consider the values
```