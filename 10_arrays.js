// Arrays

// 1. Create an array named `fruits` that contains the following strings: "apple", "banana", "pineapple".
let fruits = ["apple", "banana", "pineapple"];
console.log(fruits);

// Arrays are denoted by square brackets [] and can hold multiple values of any type, including strings, numbers, and objects.
// Arrays always create shallow copies when assigned to a new variable or passed to a function.
// Arrays can conatin multiple data types, but it's best practice to keep them homogeneous for consistency.

// 2. Access the second element in the `fruits` array and store it in a variable named `secondFruit`.
let secondFruit = fruits[1];
console.log(secondFruit);

const myanimelist = ["My Hero Academia", "Attack on Titan", "Demon Slayer", "Jujutsu Kaisen"];
// let favoriteAnime = myanimelist[2];
// console.log(favoriteAnime);

// Array methods
myanimelist.push("Over flow") // To Add values in an array. 
myanimelist.pop() // To Remove the last value of the array.
myanimelist.unshift("Fire force") //It Adds value of in front of an array.(but also chnages postion of other value)
myanimelist.shift() // To remove value in front of an array.
console.log(myanimelist);

// Other Operations
console.log(myanimelist.includes("Demon Slayer")); // To Check if the mentioned value is included or not (It always provide Boolean Value)
console.log(myanimelist.indexOf("Demon Slayer")); // To Check the postion of a value in an Array

const myMangalist = ["One Punch Man", "Black Clover"];
//console.log(myanimelist.join(myMangalist)); // To join Two Arrays (Also converts ti to strings)

// Slice & Splice (Diffrence between Slice & Splice is Splice changes the original array )
console.log("A", myanimelist.slice(1, 3)); // Slice picks the value from the array.
console.log("B", myMangalist.splice(0, 1)); // Work as slice but also makes change in original array

// Lets join two arrays
const alphabets = ["A", "B", "C", "D"];
const numbers = [1, 2, 3, 4];

// lets use pushoperator to join two arrays
alphabets.push(...numbers);
console.log(alphabets);

// You can also use concat method to join two arrays
const combinedArray = alphabets.concat(numbers); // Concat method does not change the original arrays
console.log(combinedArray);

// lets join two arrays using spread operator
const joinedArray = [...alphabets, ...numbers];
console.log(joinedArray);

// Lets flatten an array
const weapons = [["Sword", "Axe"], ["Bow", "Dagger"], ["Spear", "Mace"]];
const flatWeapons = weapons.flat();
console.log(flatWeapons);

// lets convert string to array
const myMovies = "Batman the dark knight";
console.log(Array.from(myMovies)); // Array.from method converts string to array 
console.log(myMovies.split(" ")); // split method also converts string to array based on the provided separator

