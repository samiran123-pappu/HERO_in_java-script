const nums5 = [7, 2, 9, 4];
function homeMin(arr) {
  let min = arr[0];
  for (const n of arr) {
    if (n < min) min = n;
  }
  return min;
}
console.log("Home made Min():", homeMin(nums5))



