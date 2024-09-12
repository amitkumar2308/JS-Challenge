//1. Callback Exercise: Refactor a piece of code from callback hell to use Promises or async/await for better readability.
//2. Promise Chaining Exercise: Write a function returning a Promise with a simulated delay. Chain two .then() calls to process the result.
//3. Async/Await Exercise: Create an async function that fetches data from a simulated API and processes it using await. Handle errors with try-catch.



//Solutions

//Callback Hell Refactored Using Promises
function step1(callback){
   setTimeout(()=>{
    console.log("Step 1 complete");
    callback();
   },1000)
}

function step2(callback){
    setTimeout(()=>{
        console.log("Step 2 complete");
        callback();
    },1000)
}

function step3(callback){
    setTimeout(()=>{
        console.log("Step 3 complete");
        callback();
    },1000);
}


step1(()=>{
    step2(()=>{
        step3(()=>{
            console.log("All steps complete")})
    })
})




//Refactored Using Promises:

function step1(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Step 1 complete");
            resolve();
        },1000);
    })
}

function step2(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Step 1 complete");
            resolve();
        },1000);
    })
}

function step3(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Step 1 complete");
            resolve();
        },1000);
    })
}


step1()
    .then(step2)
    .then(step3)
    .then(()=>{
        console.log("All steps complete");
    })

//Refactored Using Async/Await:

// Async function to execute steps sequentially using async/await
async function executeSteps() {
    await step1();  // Wait for step 1 to complete
    await step2();  // Wait for step 2 to complete
    await step3();  // Wait for step 3 to complete
    console.log("All steps complete");
}

// Call the async function
executeSteps();




// Function returning a promise that resolves with a message after a delay
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data fetched"), 1000);  // Simulate data fetching
    });
}

// Chain two promises to process the fetched data
fetchData()
    .then(result => {
        console.log(result);  // Log the result of the data fetching
        return new Promise((resolve) => {
            setTimeout(() => resolve("Data processed"), 1000);  // Simulate data processing
        });
    })
    .then(result => {
        console.log(result);  // Log the result of the data processing
    })
    .catch(error => console.error(error));  // Handle any errors that occur






    // Function returning a promise that resolves or rejects based on the success parameter
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

// Async function to handle the promise and process data
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






