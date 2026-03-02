# JavaScript Control Flow

Track: **06 JavaScript Loops**

## What is Control Flow?

**Control flow** is the order in which the JavaScript engine executes statements in a script. By default, code is executed sequentially from top to bottom, one line after another.

However, programming is all about making decisions and repeating actions. Control flow statements allow you to alter this default top-to-bottom execution, enabling your program to be dynamic and intelligent.

## The Main Categories of Control Flow

1.  **Sequential Flow**: The default mode.
    ```js
    let a = 1; // First
    let b = 2; // Second
    let c = a + b; // Third
    ```

2.  **Conditional Flow**: Executes a block of code only if a certain condition is met. This creates different paths through your code.
    - `if...else if...else`
    - `switch`
    - Ternary Operator (`? :`)

3.  **Repetition (Looping) Flow**: Executes a block of code repeatedly as long as a condition is true.
    - `for`
    - `while`
    - `do...while`
    - `for...in` / `for...of`

4.  **Jump (Branching) Flow**: Causes the execution to jump to another location in the script.
    - `break`: Jumps out of a loop or `switch`.
    - `continue`: Jumps to the next iteration of a loop.
    - `return`: Jumps out of a function, optionally passing back a value.
    - `throw`: Creates an error, jumping to the nearest error handler (`catch` block).

## Why This Topic Matters

Nearly all logic bugs are, at their core, control flow bugs.

- wrong branch executed
- loop stopped too early
- loop never stopped
- return happened before needed logic
- A condition was wrong, so the **wrong branch** of an `if` statement was executed.
- A loop's exit condition was incorrect, so it **stopped too early** or **ran too long**.
- A `return` statement was placed incorrectly, causing a function to **exit before its work was done**.
- A loop was missing a `break` or an increment, causing an **infinite loop** that froze the application.

Mastering control flow means you can accurately predict how your code will behave and debug it effectively when it doesn't.

## Function Flow

Functions run only when called.
`return` changes flow by exiting function immediately.

## Single-Threaded Note

JavaScript in the browser runs on a single main thread. This means it can only do one thing at a time. If you have a very long-running synchronous loop (a loop that doesn't involve waiting for something), it will **block the main thread**.

While the loop is running, the browser cannot handle user input (like clicks), update the UI, or run animations. This is why long, intensive tasks are often offloaded using asynchronous patterns like Promises or Web Workers.

## Common Mistakes

- assuming code runs "in intended order" without tracing conditions
- not accounting for early exits (`return`, `break`)
- writing branch-heavy logic without clear structure
- **Complex Nesting**: Deeply nested `if` statements and loops are hard to read and debug. It's often better to refactor them into smaller functions.
- **Ignoring Edge Cases**: Failing to consider what happens if a loop is given an empty array or if an `if` condition receives an unexpected value.

## Real-World Use

Control flow is the backbone of every application. It's used in:
- **Form Validation**: Checking if all required fields are filled out.
- **User Authentication**: Directing a user to their dashboard on successful login or showing an error on failure.
- **API Data Handling**: Looping through API results to display them on a page.
- **Game Logic**: Updating character positions and checking for collisions in a game loop.

## Quick Self-Check

- Can you trace execution order in a nested example?
- Can you identify where flow changes in a function?
- Can you explain one bug caused by incorrect control flow?
- Can you name the four main categories of control flow?
- What does it mean when we say a long-running loop can "block the main thread"?
- What is the difference between the `break` and `return` statements in the context of a function containing a loop?
