//Objects are used to store key-value pairs. Each key is a property, and it holds a value (like a variable inside the object).

let person = {
    name: "Amit",
    age: 20,
    isStudent: true
};

console.log(person.name);  // Output: Amit


//You can add, modify, or delete properties in an object

let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

car.color = "Red";  // Add new property
car.year = 2021;    // Modify existing property

delete car.model;   // Delete a property

console.log(car);  // Output: { brand: "Toyota", year: 2021, color: "Red" }
