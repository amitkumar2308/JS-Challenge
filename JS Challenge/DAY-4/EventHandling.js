//Adding Event Listeners
//Events are actions that occur in the browser, such as clicks, form submissions, or key presses. JavaScript can listen for these events and execute code in response

//Click Event listener

let button = document.getElementById("myButton");
button.addEventListener("click",()=>{
    alert("Button Clicked"); // Display an alert when the button is clicked
});

//Form Submission Event Listener

let Form = document.getElementById("myForm");
Form.addEventListener("Submit",(event)=>{
     
    event.preventDefault(); // Prevent the form from submitting
    console.log("Form Submitted");
});


//Event Object
//The event object contains information about the event, such as the type of event and the target element.

let button = document.getElementById("myButton");
button.addEventListener("click",(event)=>{
     console.log(event.type); //Log the type of event
     console.log(event.target);//Log the target element
});