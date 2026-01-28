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

// To check if the value exist in an object
console.log(car.hasOwnProperty('Mahindra')); // Return a Boolean value 


//lets add functions in the object
car.enginemodel = function() {
    return console.log("V8");
} 

console.log(car.enginemodel());

car.companymodel = function() {
    return console.log(`${this.model}`); // Using 'this' to refer to the current object
}

console.log(car.companymodel());

// To declare a object in a singleton way
const instaUser = {};
const xUser = new Object();

const bumbleUser = {
    bumbleUser: "my Ass", // Adding key in an object and also object can be nested.
    email: "myass@gmail.com",
    Looks: {
        eyes: "sharp",
        height: 5.9,
        weight: "63KG"
    }
}
console.log(bumbleUser);

// Lets combine Two Objects

const oB1 = {
    a: 1,
    b: 2
}

const oB2 = {
    c: 3,
    d: 4
}

/*let oB3 = {
    oB1, oB2
}*/

// console.log(oB3) // So  this method add two objects by always provides a object.
// console.log(oB3 = Object.assign({}, oB1, oB2)); // Using Assign Method
let oB3 = {
    ...oB1, ...oB2
} 

console.log(oB3); // Using spread method.

// Destructre a  Object

const bikeCollection = {
    RoyalEnfeild: "Hunter 350",
    Yamaha: "R15",
    Trimph: "Speed 400"
}

const {Trimph} = bikeCollection // To extract a value from an Object
console.log(Trimph);

const {RoyalEnfeild: Rajdut} = bikeCollection // To change a key name under a Object
console.log(Rajdut);


