function makeCounter(){ let c=0; return function(){ c++; return c; }; }
const counter=makeCounter();
console.log(counter());
console.log(counter());
