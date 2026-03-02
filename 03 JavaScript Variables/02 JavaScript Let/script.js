let greeting = "Hello";
{
    let greeting = "Hi"; // Different variable
    console.log("Inside block: " + greeting);
}
console.log("Outside block: " + greeting);