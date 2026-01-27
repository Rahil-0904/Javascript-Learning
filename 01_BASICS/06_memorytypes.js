// There are two type of memory 1. STACK 2. HEAP

//01 - STACK MEMORY
// Stack memory is used to store primitive data types like Number, String, Boolean, Undefined, Null, Symbol
let pikachu = "Electric Type Pokemon"; // String stored in stack memory
let dittoHp = 100; // Number stored in stack memory
let isDittoFainted = false; // Boolean stored in stack memory
let mewtwoPower = undefined; // Undefined stored in stack memory

//In case of stack memory the variable directly holds the value
let voltorb = pikachu;
voltorb = "Electric/Grass Type Pokemon"
console.log(pikachu);
console.log(voltorb);
// Here the variable voltorb directly holds the value of pikachu but not the reference.

//02 - HEAP MEMORY
// Heap memory is used to store complex data types like Objects, Arrays, Functions

let ashketchem = {
    name: "Ash Ketchum",
    age: 10,
    pokemon: ["Pikachu", "Bulbasaur", "Charmander"]
}; // Object stored in heap memory
console.log(ashketchem);
