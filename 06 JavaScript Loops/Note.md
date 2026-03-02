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

- A condition was wrong, so the **wrong branch** of an `if` statement was executed.
- A loop's exit condition was incorrect, so it **stopped too early** or **ran too long**.
- A `return` statement was placed incorrectly, causing a function to **exit before its work was done**.
- A loop was missing a `break` or an increment, causing an **infinite loop** that froze the application.

Mastering control flow means you can accurately predict how your code will behave and debug it effectively when it doesn't.

## Quick Self-Check

- Can you name the four main categories of control flow?
- What does it mean when we say a long-running loop can "block the main thread"?
- What is the difference between the `break` and `return` statements in the context of a function containing a loop?

---
*End of Track 06.*