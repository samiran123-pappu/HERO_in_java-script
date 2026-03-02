# JavaScript Array Reference Methods

```bash
# JavaScript Array Reference: method-wise examples with console output

# Base data
const arr = [10, 20, 30, 40];
const nested = [1, [2, 3], [4, [5]]];

# [] Creates a new Array
const byLiteral = [1, 2, 3];
console.log(byLiteral);
# Output: [ 1, 2, 3 ]

# new Array() Creates a new Array
const byConstructor = new Array(1, 2, 3);
console.log(byConstructor);
# Output: [ 1, 2, 3 ]

# at() Returns an indexed element
console.log(arr.at(1));
console.log(arr.at(-1));
# Output:
# 20
# 40

# concat() Joins arrays
console.log([1, 2].concat([3, 4], [5]));
# Output: [ 1, 2, 3, 4, 5 ]

# constructor Returns function that created Array prototype
console.log(arr.constructor === Array);
# Output: true

# copyWithin() Copies elements inside same array
const cw = [1, 2, 3, 4, 5];
console.log(cw.copyWithin(0, 3));
# Output: [ 4, 5, 3, 4, 5 ]

# entries() Returns key/value iterator
console.log([...['a', 'b'].entries()]);
# Output: [ [ 0, 'a' ], [ 1, 'b' ] ]

# every() Check all pass test (arrow)
console.log(arr.every(v => v > 5));
# Output: true

# fill() Fill with static value
const f = [1, 2, 3, 4];
console.log(f.fill(0, 1, 3));
# Output: [ 1, 0, 0, 4 ]

# filter() Keep matching elements (normal function)
console.log(arr.filter(function (v) { return v >= 30; }));
# Output: [ 30, 40 ]

# find() First matching value
console.log(arr.find(v => v > 15));
# Output: 20

# findIndex() First matching index
console.log(arr.findIndex(v => v > 15));
# Output: 1

# findLast() Last matching value
console.log([5, 12, 8, 130, 44].findLast(v => v > 10));
# Output: 44

# findLastIndex() Last matching index
console.log([5, 12, 8, 130, 44].findLastIndex(v => v > 10));
# Output: 4

# flat() Flatten nested arrays
console.log(nested.flat(2));
# Output: [ 1, 2, 3, 4, 5 ]

# flatMap() map + flat(1)
console.log([1, 2, 3].flatMap(v => [v, v * 2]));
# Output: [ 1, 2, 2, 4, 3, 6 ]

# forEach() Run callback for each element
[1, 2, 3].forEach((v, i) => console.log('forEach:', i, v));
# Output:
# forEach: 0 1
# forEach: 1 2
# forEach: 2 3

# from() Create array from iterable/object
console.log(Array.from('abc'));
console.log(Array.from({ length: 3 }, (_, i) => i + 1));
# Output:
# [ 'a', 'b', 'c' ]
# [ 1, 2, 3 ]

# includes() Contains element?
console.log(arr.includes(20));
console.log(arr.includes(99));
# Output:
# true
# false

# indexOf() First position of element
console.log([10, 20, 10].indexOf(10));
# Output: 0

# isArray() Check if value is array
console.log(Array.isArray(arr));
console.log(Array.isArray('not-array'));
# Output:
# true
# false

# join() Join all elements to string
console.log(['a', 'b', 'c'].join('-'));
# Output: a-b-c

# keys() Iterator of keys
console.log([...'xyz'.split('').keys()]);
# Output: [ 0, 1, 2 ]

# lastIndexOf() Search from end
console.log([10, 20, 10].lastIndexOf(10));
# Output: 2

# length Set/get number of elements
const lenArr = [1, 2, 3, 4];
lenArr.length = 2;
console.log(lenArr, lenArr.length);
# Output: [ 1, 2 ] 2

# map() Transform each element
console.log([1, 2, 3].map(v => v * 10));
# Output: [ 10, 20, 30 ]

# of() Create array from arguments
console.log(Array.of(7));
console.log(Array.of(1, 2, 3));
# Output:
# [ 7 ]
# [ 1, 2, 3 ]

# pop() Remove last
const popArr = [1, 2, 3];
console.log(popArr.pop());
console.log(popArr);
# Output:
# 3
# [ 1, 2 ]

# prototype Add custom method
Array.prototype.first = function () { return this[0]; };
console.log([9, 8, 7].first());
# Output: 9

# push() Add to end
const pushArr = [1, 2];
console.log(pushArr.push(3, 4));
console.log(pushArr);
# Output:
# 4
# [ 1, 2, 3, 4 ]

# reduce() left-to-right reduce
console.log([1, 2, 3, 4].reduce((sum, v) => sum + v, 0));
# Output: 10

# reduceRight() right-to-left reduce
console.log(['a', 'b', 'c'].reduceRight((acc, ch) => acc + ch, ''));
# Output: cba

# reverse() Mutates and reverses
const rev = [1, 2, 3];
console.log(rev.reverse());
# Output: [ 3, 2, 1 ]

# shift() Remove first
const sh = [10, 20, 30];
console.log(sh.shift());
console.log(sh);
# Output:
# 10
# [ 20, 30 ]

# slice() Return selected part
console.log([10, 20, 30, 40].slice(1, 3));
# Output: [ 20, 30 ]

# some() Check if any passes
console.log([1, 3, 5, 8].some(v => v % 2 === 0));
# Output: true

# sort() Sort elements (same output: arrow vs normal function)
const s1 = [40, 5, 100, 1];
console.log([...s1].sort((a, b) => a - b));
console.log([...s1].sort(function (a, b) { return a - b; }));
# Output:
# [ 1, 5, 40, 100 ]
# [ 1, 5, 40, 100 ]

# splice() Add/remove elements (mutates)
const sp = [1, 2, 3, 4];
console.log(sp.splice(1, 2, 99, 100));
console.log(sp);
# Output:
# [ 2, 3 ]
# [ 1, 99, 100, 4 ]

# toReversed() Non-mutating reverse
const tr = [1, 2, 3];
console.log(tr.toReversed());
console.log(tr);
# Output:
# [ 3, 2, 1 ]
# [ 1, 2, 3 ]

# toSorted() Non-mutating sort
const ts = [40, 5, 100, 1];
console.log(ts.toSorted((a, b) => a - b));
console.log(ts);
# Output:
# [ 1, 5, 40, 100 ]
# [ 40, 5, 100, 1 ]

# toSpliced() Non-mutating splice
const tsp = [1, 2, 3, 4];
console.log(tsp.toSpliced(1, 2, 99, 100));
console.log(tsp);
# Output:
# [ 1, 99, 100, 4 ]
# [ 1, 2, 3, 4 ]

# toString() Convert array to string
console.log([1, 2, 3].toString());
# Output: 1,2,3

# unshift() Add to beginning
const un = [2, 3];
console.log(un.unshift(0, 1));
console.log(un);
# Output:
# 4
# [ 0, 1, 2, 3 ]

# valueOf() Primitive value (same array object)
const vv = [1, 2, 3];
console.log(vv.valueOf());
# Output: [ 1, 2, 3 ]

# with() Return copied array with one element changed
const w = [10, 20, 30];
console.log(w.with(1, 99));
console.log(w);
# Output:
# [ 10, 99, 30 ]
# [ 10, 20, 30 ]

# Extra: same method, different callback style (filter)
const demo = [5, 12, 8, 130, 44];
console.log(demo.filter(v => v > 10));
console.log(demo.filter(function (v) { return v > 10; }));
# Output:
# [ 12, 130, 44 ]
# [ 12, 130, 44 ]
```
