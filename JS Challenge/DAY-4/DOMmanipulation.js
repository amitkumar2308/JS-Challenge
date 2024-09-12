//Manipulating DOM Elements


//3.1 Changing Content

//You can modify the text or HTML content of elements using properties.

//Changing Text Content

let element = document.getElementById("myElement");
element.textContent = "Hello, World!"; //you can change the text content of an element

//Changing HTML Content
let element = document.getElementById("myElement");
element.innerHTML= "<p>Hello, World!</p>"; //you can change the HTML content of an element

//Get Attributes\
let element = document.getElementById("myElement"); 
console.log(element.getAttribute("class")); //you can get the value of an attribute
console.log(src);

//Set Attribute
let element = document.getElementById("myElement");
element.setAttribute("src", "newImage.jpg");  // Set a new value for the "src" attribute

//Remove Attribute
let element = document.getElementById("myElement");
element.removeAttribute("src");  // Remove the "src" attribute  



//Adding/Removing Elements


//Create and Append Element
let newElement = document.createElement("div");  // Create a new <div> element
newElement.textContent = "I'm a new element";  // Add text content to the new element
document.body.appendChild(newElement);  // Append the new element to the body


//Remove an element
let element = document.getElementById("myElement");
element.parentNode.removeChild(element);  // Remove the element from its parent

//INSERT BEFORE
let newElement = document.createElement("p");
newElement.textContent = "Inserted before";
let referenceElement = document.getElementById("referenceElement");
referenceElement.parentNode.insertBefore(newElement, referenceElement);  // Insert newElement before referenceElement
