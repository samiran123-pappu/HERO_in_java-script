// Base data
const arr = [10, 20, 30, 40];
const nested = [1, [2, 3], [4, [5]]];
const mixed = [1, 'two', true, null, undefined, { key: 'value' }, [6, 7]];
const empty = [];
const sparse = [1, , 3, , 5]; // Sparse array with empty slots
const multiDimensional = [[1, 2], [3, 4], [5, 6]];
const arrayLike = { 0: 'a', 1: 'b', length: 2 }; // Array-like object
const largeArray = Array.from({ length: 1000 }, (_, i) => i + 1); // Large array with 1000 elements
const arrayWithHoles = [1, , 3, , 5]; // Array with holes (empty slots)
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5]; // Array with duplicate values
const arrayWithObjects = [{ id: 1 }, { id: 2 }, { id: 3 }];
const arrayWithFunctions = [() => 'Hello', () => 'World']; // Array containing functions
const arrayWithMixedTypes = [1, 'two', true, null, undefined, { key: 'value' }, [6, 7], () => 'function']; // Array with mixed types
const arrayWithUndefined = [1, undefined, 3, undefined, 5]; // Array with undefined values
const arrayWithNulls = [1, null, 3, null, 5]; // Array with null values
const arrayWithNaN = [1, NaN, 3, NaN, 5]; // Array with NaN values
const arrayWithInfinity = [1, Infinity, 3, -Infinity, 5]; // Array with Infinity values
const arrayWithSymbols = [Symbol('a'), Symbol('b'), Symbol('c')]; // Array with symbols
const arrayWithDates = [new Date('2020-01-01'), new Date('2021-01-01'), new Date('2022-01-01')]; // Array with Date objects
const arrayWithRegExps = [/abc/, /def/, /ghi/]; // Array with regular expressions
const arrayWithMaps = [new Map(), new Map(), new Map()]; // Array with Map objects
const arrayWithSets = [new Set(), new Set(), new Set()];
const arrayWithWeakMaps = [new WeakMap(), new WeakMap(), new WeakMap()]; // Array with WeakMap objects
const arrayWithWeakSets = [new WeakSet(), new WeakSet(), new WeakSet()];
const arrayWithTypedArrays = [new Int8Array(), new Uint8Array(), new Float32Array()]; // Array with typed arrays
const arrayWithBuffers = [new ArrayBuffer(8), new ArrayBuffer(16), new ArrayBuffer(32)]; // Array with ArrayBuffer objects
const arrayWithSharedBuffers = [new SharedArrayBuffer(8), new SharedArrayBuffer(16), new SharedArrayBuffer(32)];
const arrayWithDataViews = [new DataView(new ArrayBuffer(8)), new DataView(new ArrayBuffer(16)), new DataView(new ArrayBuffer(32))]; // Array with DataView objects
const arrayWithPromises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]; // Array with Promise objects
const arrayWithGenerators = [function* () { yield 1; }, function* () { yield 2; }, function* () { yield 3; }];
const arrayWithAsyncFunctions = [async () => 'Hello', async () => 'World']; // Array with async functions
const arrayWithIterators = [new Map().entries(), new Set().values(), [1, 2, 3][Symbol.iterator]()]; // Array with iterators
const arrayWithSymbolsAndFunctions = [Symbol('a'), () => 'function']; // Array with symbols and functions
const arrayWithNestedArrays = [[1, 2], [3, 4], [5, [6, 7]]];
const arrayWithNestedObjects = [{ id: 1, nested: { key: 'value' } }, { id: 2, nested: { key: 'value' } }, { id: 3, nested: { key: 'value' } }]; // Array with nested objects
const arrayWithNestedFunctions = [() => () => 'Hello', () => () => 'World'];
const arrayWithNestedSymbols = [Symbol('a'), Symbol('b'), Symbol('c'), [Symbol('d'), Symbol('e')]]; // Array with nested symbols
const arrayWithNestedDates = [new Date('2020-01-01'), new Date('2021-01-01'), new Date('2022-01-01'), [new Date('2023-01-01'), new Date('2024-01-01')]]; // Array with nested Date objects
const arrayWithNestedRegExps = [/abc/, /def/, /ghi/, [/jkl/, /mno/]]; // Array with nested regular expressions
const arrayWithNestedMaps = [new Map(), new Map(), new Map(), [new Map(), new Map()]]; // Array with nested Map objects
const arrayWithNestedSets = [new Set(), new Set(), new Set(), [new Set(), new Set()]]; // Array with nested Set objects
const arrayWithNestedWeakMaps = [new WeakMap(), new WeakMap(), new WeakMap(), [new WeakMap(), new WeakMap()]]; // Array with nested WeakMap objects
const arrayWithNestedWeakSets = [new WeakSet(), new WeakSet(), new WeakSet(), [new WeakSet(), new WeakSet()]]; // Array with nested WeakSet objects
const arrayWithNestedTypedArrays = [new Int8Array(), new Uint8Array(), new Float32Array(), [new Int16Array(), new Uint16Array()]]; // Array with nested typed arrays


console.log(arr);console.log(nested);
console.log(mixed);
console.log(empty);
console.log(sparse);
console.log(multiDimensional);
console.log(arrayLike);
console.log(largeArray);
console.log(arrayWithHoles);
console.log(arrayWithDuplicates);   
console.log(arrayWithObjects);

console.log(arrayWithFunctions);
console.log(arrayWithMixedTypes);
console.log(arrayWithUndefined);
console.log(arrayWithNulls);
console.log(arrayWithNaN);
console.log(arrayWithInfinity);
console.log(arrayWithSymbols);




console.log(arrayWithDates);
console.log(arrayWithRegExps);
console.log(arrayWithMaps);
console.log(arrayWithSets);
console.log(arrayWithWeakMaps);
console.log(arrayWithWeakSets);
console.log(arrayWithTypedArrays);
console.log(arrayWithBuffers);
console.log(arrayWithSharedBuffers);
console.log(arrayWithDataViews);
console.log(arrayWithPromises);
console.log(arrayWithGenerators);
console.log(arrayWithAsyncFunctions);
console.log(arrayWithIterators);
console.log(arrayWithSymbolsAndFunctions);
console.log(arrayWithNestedArrays);

console.log(arrayWithNestedObjects);
console.log(arrayWithNestedFunctions);
console.log(arrayWithNestedSymbols);
console.log(arrayWithNestedDates);

console.log(arrayWithNestedRegExps);
console.log(arrayWithNestedMaps);
console.log(arrayWithNestedSets);
console.log(arrayWithNestedWeakMaps);
console.log(arrayWithNestedWeakSets);
console.log(arrayWithNestedTypedArrays);

