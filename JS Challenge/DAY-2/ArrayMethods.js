//JavaScript has many built-in methods to work with arrays, such as map, filter, and forEach.

//forEach:
//Executes a function for each element in an array.

let numbers = [1, 2, 3, 4];
numbers.forEach(function(number) {
    console.log(number);
});
// Output: 1 2 3 4


//map:
//Creates a new array by performing a function on every element in the original array.

let squares = numbers.map(function(number) {
    return number * number;
});

console.log(squares);  // Output: [1, 4, 9, 16]


//filter:
//Creates a new array with only the elements that pass a certain condition.

let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});

console.log(evenNumbers);  // Output: [2, 4]
