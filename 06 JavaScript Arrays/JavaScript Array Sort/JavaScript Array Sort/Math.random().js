const nums4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const randomSort = nums4.toSorted(() => Math.random() - 1);
const randomSort = nums4.toSorted(function(a, b) {
    return Math.random() - 1;
});
console.log("Random Sort:", randomSort);











// Random Sort: [
//   8, 7, 1, 9, 2,
//   3, 4, 5, 6
// ] //Math.random() - 0.5
// Random Sort: [
//   9, 8, 7, 6, 5,
//   4, 3, 2, 1
// ] //Math.random() - 1