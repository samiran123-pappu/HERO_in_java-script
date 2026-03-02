// const nums = [1, 2, 3, 4];
const users = ["Samir", "Asha", "John"];
// console.log(nums.flatMap(n => [n, n * 10]));
// console.log(users.flatMap(n => [n, n.toUpperCase()]));
console.log(users.flatMap(function(u) {
    return [u, u.toUpperCase()];
}));
// console.log(users.flatMap(u => [u, u.toUpperCase()]));