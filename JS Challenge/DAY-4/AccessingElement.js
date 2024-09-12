///Selecting Elements

///JavaScript provides several methods to select elements from the DOM.

///document.getElementById(id)

///Description: Selects an element by its id attribute.



///Example:
let elementid = document.getElementById("myElement");  // Select the element with id="myElement"
console.log(element);  // Log the selected element

//----------------------------------------------------------------------------------------------------------------
//document.getElementsByClassName(className)
//Description: Selects elements by their class attribute. Returns an HTMLCollection.
//Example:

let elementsclass = document.getElementsByClassName("myClass");  // Select all elements with class="myClass"
console.log(elements);  // Log the selected elements

//-----------------------------------------------------------------------------------------------------------------
//document.getElementsByTagName(tagName)
//Description: Selects elements by their tag name. Returns an HTMLCollection.
//Example:
let elementstag = document.getElementsByTagName("p");  // Select all <p> elements
console.log(elements);  // Log the HTMLCollection of <p> elements

//-----------------------------------------------------------------------------------------------------------------
//document.querySelector(selector)
//Description: Selects the first element that matches the CSS selector.
//Example:

let elementsqs = document.querySelector(".myClass");  // Select the first element with class="myClass"
console.log(element);  // Log the selected element

//-----------------------------------------------------------------------------------------------------------------
//document.querySelectorAll(selector)
//Description: Selects all elements that match the CSS selector. Returns a NodeList.
//Example:

let elements = document.querySelectorAll("div.myClass");  // Select all <div> elements with class="myClass"
console.log(elements);  // Log the NodeList of elements
