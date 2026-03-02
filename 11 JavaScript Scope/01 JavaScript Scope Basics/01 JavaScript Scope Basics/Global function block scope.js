var x = 1;      // global (in script)
let y = 2;      // global (not window property in browser)
const z = 3;    // global (not window property in browser)

function demoFunctionScope() {
  const local = "inside";
  console.log(local);
}

demoFunctionScope();
// console.log(local); // ReferenceError

{
  let blockOnly = "block";
  console.log(blockOnly);
}
// console.log(blockOnly); // ReferenceError
