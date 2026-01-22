// NUMBERS IN JAVA SCRIPT

// Here we declare a variable named 'pikachuHp' and assign it the numeric value of 100
const pikachuHp = 100;

// Lets declare a number via (new) keyword to use javascript objects like ---
const charmanderHp = new Number(80);
console.log(charmanderHp);

// To change the number to string we can use .toString() method.
console.log(typeof charmanderHp.toString());

//Lets check its length via .length method
console.log(charmanderHp.toString().length);

// tofixed() method is used to format a number with a specific number of digits after the decimal point.
console.log(charmanderHp.toFixed(0));
console.log(charmanderHp.toFixed(1));

// toPrecision() method is used to format a number to a specified length.
console.log(charmanderHp.toPrecision(1));
console.log(charmanderHp.toPrecision(2));

const bulbasaurHp = 90.56789;

// toprecision() method with decimal numbers which provides a precise value based on the total number of digits specified.
console.log(bulbasaurHp.toPrecision(3));
console.log(bulbasaurHp.toPrecision(5));

const arceusHp = 1200000;

// tolocalstring() method is used to convert a number into a string, using local language format.
console.log(arceusHp.toLocaleString('en-US'));
console.log(arceusHp.toLocaleString('en-IN'));

// ---------------------- MATH OBJECT IN JAVASCRIPT -------------------

// Math object allows us to perform mathematical tasks on numbers.
console.log(Math);

// Math.abs() method returns the absolute value of a number.
console.log(Math.abs(-50));

// Math.round() method returns the value of a number rounded to the nearest integer.
console.log(Math.round(22.06));

//Math.ceil() method returns the smallest integer greater than or equal to a given number.
console.log(Math.ceil(22.99));

// Math.floor() method returns the largest integer less than or equal to a given number.
console.log(Math.floor(22.99));

// Math.max & Math.min() methods returns the largest and smallest number from a set of numbers respectively.
console.log(Math.max(10, 20, 5, 40, 25));
console.log(Math.min(10, 20, 5, 40, 25));

// Math.random() method returns a random number between 0 (inclusive) and 1 (exclusive).
console.log(Math.random());
console.log(Math.random() * 100); // random number between 0 and 100    

const magikarpHp = 10;
const gyaradosHp = 400; 

// random number between magikarpHp and gyaradosHp
console.log((Math.floor(Math.random() * (gyaradosHp - magikarpHp + 1)) + magikarpHp));