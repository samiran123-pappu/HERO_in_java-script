const nums5 = [7, 2, 9, 4, 10];
function homeMax(arr) {
  let max = arr[0];
  for (const n of arr) {
    if (n > max) max = n;
  }
  return max;
}
console.log("Home made Max():", homeMax(nums5))