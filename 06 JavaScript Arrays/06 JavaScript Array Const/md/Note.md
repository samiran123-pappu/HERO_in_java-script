# JavaScript Array Const

## ECMAScript 2015 (ES6)
In 2015, JavaScript introduced an important keyword: `const`.

It is now common to declare arrays with `const`:

```js
const cars = ["Saab", "Volvo", "BMW"];
```

## Cannot Be Reassigned
An array declared with `const` cannot be reassigned to a new array:

```js
const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"]; // ERROR
```

## Arrays Are Not Fully Constant
`const` does not make array elements immutable.
`const` makes the reference constant.

So you can still change items inside the same array.

## Elements Can Be Reassigned

```js
const cars = ["Saab", "Volvo", "BMW"];

cars[0] = "Toyota";   // allowed
cars.push("Audi");    // allowed
```

## Assigned When Declared
`const` must be initialized at declaration time.

```js
const cars; // SyntaxError
cars = ["Saab", "Volvo", "BMW"];
```

With `var`, later assignment is allowed:

```js
cars = ["Saab", "Volvo", "BMW"];
var cars;
```

## Const Block Scope
`const` is block scoped.

```js
const cars = ["Saab", "Volvo", "BMW"];
// cars[0] is "Saab"

{
  const cars = ["Toyota", "Volvo", "BMW"];
  // cars[0] is "Toyota"
}

// cars[0] is "Saab"
```

`var` is function/global scoped, not block scoped:

```js
var cars = ["Saab", "Volvo", "BMW"];
// cars[0] is "Saab"

{
  var cars = ["Toyota", "Volvo", "BMW"];
  // cars[0] is "Toyota"
}

// cars[0] is "Toyota"
```

## Redeclaring Arrays
`var` can be redeclared:

```js
var cars = ["Volvo", "BMW"];
var cars = ["Toyota", "BMW"];
cars = ["Volvo", "Saab"];
```

`const` cannot be redeclared or reassigned in the same scope:

```js
const cars = ["Volvo", "BMW"];

// const cars = ["Volvo", "BMW"]; // Not allowed
// var cars = ["Volvo", "BMW"];   // Not allowed
// cars = ["Volvo", "BMW"];       // Not allowed
```

But `const` can be declared again in a different block:

```js
const cars = ["Volvo", "BMW"];

{
  const cars = ["Toyota", "BMW"];
}
```

## VIP Points (Important)
- `const` array means fixed reference, not fixed contents.
- You can modify elements (`cars[0] = ...`, `push`, `pop`, etc.).
- You cannot reassign the whole array variable.
- `const` must be initialized at declaration.
- `const` is block scoped.
- Same-scope redeclaration with `const` is not allowed.
- Different-block `const` with same name is allowed.
