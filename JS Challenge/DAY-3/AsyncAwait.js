//Understanding Async/Await
//async: Declares an asynchronous function. This function always returns a promise.
//await: Pauses the execution of the async function until the promise resolves.

// Function that returns a promise which resolves or rejects based on the success parameter
function fetchData(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("Data fetched");  // Resolve with data
            } else {
                reject("Data fetch failed");  // Reject with an error message
            }
        }, 1000);  // Simulate delay of 1 second
    });
}

// Async function to handle the promise
async function processData() {
    try {
        let result = await fetchData(true);  // Wait for the promise to resolve
        console.log(result);  // Log the result of data fetching

        result = await fetchData(false);  // Wait for the promise to resolve (this will throw an error)
        console.log(result);  // This line will not be executed
    } catch (error) {
        console.error(error);  // Handle and log any errors
    }
}

// Call the async function
processData();




//Handling Multiple Async Operations
//Concurrency: Use Promise.all to execute multiple promises concurrently and wait for all of them to resolve.
// Async function to fetch multiple pieces of data concurrently
async function fetchAllData() {
    // Start both fetch operations simultaneously
    let data1 = fetchData(true);
    let data2 = fetchData(true);

    // Wait for both promises to resolve
    let [result1, result2] = await Promise.all([data1, data2]);

    console.log(result1);  // Log the result of the first fetch
    console.log(result2);  // Log the result of the second fetch
}

// Call the async function
fetchAllData();



//Best Practices


//Error Handling: Always use try-catch blocks to handle errors in async functions.
//Avoid Blocking Code: Keep async functions efficient by avoiding blocking code.
//Concurrency: Use Promise.all for concurrent async operations to improve performance
