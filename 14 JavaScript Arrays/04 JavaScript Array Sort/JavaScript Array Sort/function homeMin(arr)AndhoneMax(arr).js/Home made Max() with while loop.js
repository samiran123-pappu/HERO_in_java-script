const nums5 = [7, 2, 9, 4];
function myArrayMax(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}
console.log("Home made Max() with while loop:", myArrayMax(nums5))