# Note
```bash
Every JavaScript object has a toString() method.

The toString() method is used internally by JavaScript when an object needs to be displayed as a text (like in HTML), or when an object needs to be used as a string.
```


# Note
```bash
Many languages allow negative bracket indexing like [-1] to access elements from the end of an object / array / string.

This is not possible in JavaScript, because [] is used for accessing both arrays and objects. obj[-1] refers to the value of key -1, not to the last property of the object.

The at() method was introduced in ES2022 to solve this problem.
```

# Note
```bash
The concat() method does not change the existing arrays. It always returns a new array.
The concat() method can take any number of array arguments.
Example (Merging Three Arrays)
```











```javascript
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
```