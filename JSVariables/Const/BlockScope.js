// Difference Between var, let and const
//       Scope	Redeclare	Reassign	Hoisted	 Binds this
// var	 No	        Yes	        Yes	        Yes	 Yes
// let	 Yes	     No	        Yes	        No	 No
// const Yes	     No	        No	        No	 No


// What is Good?
// let and const have block scope.

// let and const can not be redeclared.

// let and const must be declared before use.

// let and const does not bind to this.

// let and const are not hoisted.

// What is Not Good?
// var does not have to be declared.

// var is hoisted.

// var binds to this.

// Browser Support
// The let and const keywords are not supported in Internet Explorer 11 or earlier.

// The following table defines the first browser versions with full support:

// Chrome 49	 Edge 12	     Firefox 36	   Safari 11	      Opera 36
// Mar, 2016	 Jul, 2015	     Jan, 2015	   Sep, 2017	      Mar, 2016



// Block Scope
const x = 10;
// Here x is 10

{
const x = 2;
// Here x is 2
}

// Here x is 10