// Redeclaring
// Redeclaring a JavaScript variable with var is allowed anywhere in a program:

// Example
var x = 2;
// Now x is 2

var x = 3;
// Now x is 3



// With let, redeclaring a variable in the same block is NOT allowed:

// Example
var x = 2;   // Allowed
let x = 3;   // Not allowed

{
let x1 = 2;   // Allowed
let x1 = 3;   // Not allowed
}

{
let x = 2;   // Allowed
var x = 3;   // Not allowed
}



// Redeclaring a variable with let, in another block, IS allowed:

// Example
let x = 2;   // Allowed

{
let x = 3;   // Allowed
}

{
let x = 4;    // Allowed
}


