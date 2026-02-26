# Note1
```bash
It is a common practice to declare arrays with the const keyword.

Learn more about const with arrays in the chapter: JS Array Const.
```

#  Note2:
```bash
 Array indexes start with 0.

[0] is the first element. [1] is the second element.
```

# WARNING !
```bash
// Adding elements with high indexes can create undefined "holes" in an array:

const cars1 = ["BMW", "Volvo", "Saab", "Ford"];
cars1[5] = "Audi";
console.log(cars1);
```