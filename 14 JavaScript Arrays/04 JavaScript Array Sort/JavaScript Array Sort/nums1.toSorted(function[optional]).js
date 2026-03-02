const nums1 = [40, 5, 100, 25];
// const sortedCopy = nums1.toSorted((a, b) => b-a);
const sortedCopy = nums1.toSorted(function(a, b){
    return b - a;
});
console.log("toSorted() original:", nums1);
console.log("toSorted() new     :", sortedCopy);