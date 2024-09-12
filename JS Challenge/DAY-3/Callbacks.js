// Understanding Callbacks
//Definition: A callback is a function passed into another function as an argument. It is executed after the completion of the other function’s task.
//Purpose: Callbacks are used to handle asynchronous operations, such as reading files, making network requests, or interacting with databases.

// Function simulating an asynchronous operation with a callback
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");  // Log when the data is fetched
        callback();  // Call the provided callback function after fetching data
    }, 2000);  // Simulate a delay of 2 seconds
}

// Function to handle the data after fetching
function handleData() {
    console.log("Handling data");  // Log when the data is being handled
}

// Execute fetchData and pass handleData as the callback
fetchData(handleData);



//Callback Hell
//Problem: When multiple asynchronous operations depend on each other, the code can become deeply nested, making it hard to read and maintain. This is known as "callback hell" or "pyramid of doom."
//Solution: Refactor the code using Promises or async/await to avoid deep nesting

// Simulate a series of steps that depend on each other
function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 complete");  // Log completion of step 1
        callback();  // Proceed to the next step
    }, 1000);  // Simulate delay of 1 second
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 complete");  // Log completion of step 2
        callback();  // Proceed to the next step
    }, 1000);  // Simulate delay of 1 second
}

function step3(callback) {
    setTimeout(() => {
        console.log("Step 3 complete");  // Log completion of step 3
        callback();  // Log that all steps are complete
    }, 1000);  // Simulate delay of 1 second
}

// Execute steps sequentially using nested callbacks
step1(() => {
    step2(() => {
        step3(() => {
            console.log("All steps complete");  // Log when all steps are done
        });
    });
});
