const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap(x => [x, x * 99999999]);
console.log("myArr:", newArr);