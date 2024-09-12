//Understanding Promises
//Definition: A Promise represents a value that may be available now, in the future, or never. Promises have three states:
//Pending: Initial state, neither fulfilled nor rejected.
//Fulfilled: The operation completed successfully.
//Rejected: The operation failed.
//Methods:
//.then(onFulfilled, onRejected): Adds handlers for success and failure.
//.catch(onRejected): Adds a handler for failure.
//.finally(onFinally): Adds a handler to be called regardless of the outcome.



//Creating and Using Promises


// Create a promise that simulates an asynchronous operation
let promise = new Promise((resolve, reject) => {
    let success = true;  // Simulate success

    if (success) {
        resolve("Operation successful");  // Resolve the promise with a success message
    } else {
        reject("Operation failed");  // Reject the promise with an error message
    }
});

// Handle the promise result with .then() and .catch()
promise
    .then(result => console.log(result))  // Log success message
    .catch(error => console.error(error));  // Log error message if the promise is rejected





   // Chaining Promises
   // Purpose: To handle a sequence of asynchronous operations where each operation depends on the result of the previous one

   // Function that returns a promise resolving after a delay
      function fetchData() {
          return new Promise((resolve) => {
              setTimeout(() => resolve("Data fetched"), 1000);  // Resolve with a message after 1 second
          });
      }
      
      // Chain multiple promises to process the data sequentially
      fetchData()
          .then(result => {
              console.log(result);  // Log data fetching result
              return new Promise((resolve) => {
                  setTimeout(() => resolve("Data processed"), 1000);  // Return another promise for processing
              });
          })
          .then(result => {
              console.log(result);  // Log data processing result
          })
          .catch(error => console.error(error));  // Handle any errors in the promise chain
      



          //Error Handling with Promises
          //Handling Errors: Use .catch() to handle errors that occur in any part of the promise chain.

          // Function that returns a promise which can succeed or fail
              function fetchData(success) {
                  return new Promise((resolve, reject) => {
                      setTimeout(() => {
                          if (success) {
                              resolve("Data fetched");  // Resolve with data if success is true
                          } else {
                              reject("Data fetch failed");  // Reject with an error message if success is false
                          }
                      }, 1000);  // Simulate delay of 1 second
                  });
              }
              
              // Handle errors in promise with .catch()
              fetchData(false)
                  .then(result => console.log(result))  // This will not be executed because of rejection
                  .catch(error => console.error(error));  // Log the error message
              