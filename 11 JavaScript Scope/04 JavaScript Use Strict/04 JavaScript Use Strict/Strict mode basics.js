"use strict";

function strictExample() {
  // undeclaredVar = 10; // would throw ReferenceError
  const declaredVar = 10;
  return declaredVar;
}

console.log("strict result:", strictExample());
