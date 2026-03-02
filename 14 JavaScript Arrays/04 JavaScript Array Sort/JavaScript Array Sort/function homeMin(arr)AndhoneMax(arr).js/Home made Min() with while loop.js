const nums5 = [7, 2, 9, 4];

function myArrayMin(arr) {
  let len = arr.length;
  let min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}
console.log("Home made Min() with while loop:", myArrayMin(nums5))