const arr = [5,26,  12, 8, 130, 44];
// let lastIndex = function(x){
//     return x > 27;
// }
let lastIndex = x => x > 15;
console.log(arr.findLastIndex(lastIndex));
