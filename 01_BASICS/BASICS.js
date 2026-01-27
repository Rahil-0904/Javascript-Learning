/* THIS FILE CONTAINS BASIC JAVASCRIPT CONCEPTS */

// 01 JAVASCRIPT are case-sensitive language which means variables, functions, and objects names are case-sensitive.
let fruit = "Apple";
let Fruit = "Banana";
console.log(fruit);

// 02 JAVASCRIPT statements are separated by semicolons add which is optional in most cases. but it is a good practice to use semicolons to avoid potential issues.
let number = 10;
let square = number * number;
console.log(square);

// 03 COMMENTS IN JAVASCRIPT
// Single-line comment

/* Multi-line comment
   This is a comment that spans
   multiple lines.
*/
console.log("Comments are important for code documentation.");

// 04 JAVASCRIPT SCOPES are of three types: Global Scope, Function Scope, and Block Scope.
let globalVar = "I am a global variable"; // Global Scope can be accessed from anywhere in the code.

function myFunction() { // Function Scope are accessible only within the function they are defined in.
    let functionVar = "I am a function variable";
    console.log(functionVar);   
}
myFunction();

if (true) { // Block Scope are accessible only within the block they are defined in.
    let blockVar = "I am a block variable";
    console.log(blockVar);
}               
// console.log(blockVar); // This will cause an error because blockVar is not accessible outside the block

// 05 JAVASCRIPT DATA TYPES
// Primitive Data Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt
let str = "Hello, World!"; // String
let num = 42; // Number
let bool = true; // Boolean
let n = null; // Null               
let undef; // Undefined
let sym = Symbol("unique"); // Symbol
let bigIntNum = 9007199254740991n; // BigInt
console.log(typeof str);
console.log(typeof num);
console.log(typeof bool);
console.log(typeof n);
console.log(typeof undef);
console.log(typeof sym);
console.log(typeof bigIntNum);
// Non-Primitive Data Types: Object, Array, Function
let obj = { name: "Alice", age: 30 }; // Object
let arr = [1, 2, 3, 4, 5];
function greet() { // Function
    return "Hello!";
}   
console.log(typeof obj);
console.log(typeof arr);
console.log(typeof greet);  

// 06 TYPE CONVERSION IN JAVASCRIPT
