const scopeReference = {
  global: "Declared outside function/block",
  functionScope: "Declared inside function",
  blockScope: "Declared with let/const inside block",
  hoisting: "Declarations hoisted, initialization stays in place",
  strictMode: "Safer mode that prevents accidental bad patterns"
};

console.log(scopeReference);
