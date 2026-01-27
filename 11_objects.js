// Objects in JavaScript are collections of key-value pairs.
// To declare a obeject we use curly braces {} and define properties as key-value pairs.

// singleton Object
let person = {
    name: "Ami", // key: name, value: "Ami"
    age: 35,
    city: "Ranchi"
};
console.log(person);

// To Access object properties, we can use dot notation or bracket notation.
console.log(person);
console.log(person.name); // Accessing using dot notation
console.log(person["age"]); // Accessing using bracket notation     
// You can also add new properties to an existing object.

// To declare a symbol in object keys

const make = Symbol("Toyota");

let car = {
    [make]: "Toyota", // Using [make] (bracket notation) ensures the key is the Symbol 'make'. 
    model: "Camry",
    year: 2020
};
console.log(car);
// The key itself is a Symbol, but the value assigned to it is the string "Toyota".
// This is why typeof car[make] returns "string" (it checks the value, not the key).
console.log(typeof car[make]);
console.log(typeof make); // This returns "symbol" (the key type)

// Adding a new property
car.model = "Hylux";
console.log(car);

// To freeze an object (make it immutable)
//Object.freeze(car);
car.year = 2021; // This will not change the year property as the object is frozen
console.log(car);

// To get all keys of an object
console.log(Object.keys(car)); // Returns an array of keys

// To get all values of an object
console.log(Object.values(car)); // Returns an array of values  

// To get all entries (key-value pairs) of an object
console.log(Object.entries(car)); // Returns an array of [key, value] pairs 

//lets add functions in the object
car.enginemodel = function() {
    return console.log("V8");
} 

console.log(car.enginemodel());

car.companymodel = function() {
    return console.log(`${this.model}`); // Using 'this' to refer to the current object
}

console.log(car.companymodel());