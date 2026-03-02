# JavaScript Object Methods

Track: **10 JavaScript Objects**

## What is a Method?

Objects can also have **methods**.
Methods are actions that can be performed on objects.
Methods are stored in properties as **function definitions**.

```js
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
```

## The `this` Keyword

In a method, `this` refers to the **owner object**.
In the example above, `this` refers to the `person` object.
`this.firstName` means the `firstName` property of **this object**.

## Accessing Object Methods

You access an object method with the following syntax:

```js
objectName.methodName()
```

If you access a method without the `()` parentheses, it will return the **function definition**, not the result.

## Quick Self-Check

1.  What is a method? (A function stored as a property)
2.  What does `this` refer to inside an object method? (The object itself)
3.  What happens if you forget `()` when calling a method? (You get the function code)

---
*End of Track 10.*