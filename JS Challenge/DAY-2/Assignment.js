//Create an array of 5 different fruits. Use a loop to print each fruit.

//Create an object that represents a book, with properties like title, author, and year. Modify one of the properties.

//Use the filter method to find all numbers greater than 50 in an array.





//solutions


//Create an array of 5 different fruits. Use a loop to print each fruit.
let fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

for (let i=0; i<fruits.length; i++){
console.log(fruits);
}


//Create an object that represents a book, with properties like title, author, and year. Modify one of the properties.

let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};  
book.year = 1926;
console.log(book);

//Use the filter method to find all numbers greater than 50 in an array.

let num = ["10", "20", "30", "40", "50", "60", "70", "80", "90", "100"];

let result = num.filter(function(num){
         return number>50;
});

console.log(result);
