// Function in JS can be defined in multiple ways. 

function myHubby() {
    console.log("Shivani is dangerous");
}

// To Call the function
myHubby(); // Parentheses are used to invoke the function

// Using Function to add numbers
function addNumbers(a, b) { // a & b are parameters
    return a + b; // return keyword is used to return the value from the function
}

console.log(addNumbers(5, 3)); // 5 & 3 are arguments

// 
function mygamingId(psusername) {
    return `${psusername} is my gaming id on PlayStation`; // return the value from the function works as output
}

console.log(mygamingId("Diealredy3"));

// Lets use function 
function userID(name) {
    if (name === "Shivani") { // Conditional Statement
        return "Welcome Shivani, You are my daring"; 
    }
}

console.log(userID("Shivani")); // Calling the function with argument (Undefined will be return if condition is not met)

// Print an Array property using function using rest operators
function myFriends(...friends) { // Rest operator to accept multiple arguments as an array
    return friends;
}
console.log(myFriends("Yagyesh", "Shivani", "Amisha")); //  Calling the function with multiple arguments

// Print an Object property using function

let myAnimes = {
    name: "Death Note",
    genre: "Thriller",
    episodes: 37,
    rating: 9.0
}

function animedocs(...animeName) { // Using rest operator to accept object as argument
    console.log(`"These are the anime details", ${animeName[0].name}`); // Accessing object properties inside the function
    
}
animedocs(myAnimes); // Passing object as an argument to the function