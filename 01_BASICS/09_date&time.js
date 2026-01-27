// DATE AND TIME IN JAVASCRIPT

// Date object is used to work with dates and times in JavaScript.
// Which starts from January 1, 1970 (UTC).
let myBirthday = new Date();
console.log(myBirthday);
console.log(typeof myBirthday);

// Month in Date object is 0 indexed.
let herbirthday = new Date(2000, 5, 23); // Year, Month (0-11), Day
console.log(herbirthday);

// To format date formats we can use different methods available with Date object.
console.log(new Date().toLocaleString(herbirthday));
console.log(new Date().toDateString(herbirthday));
console.log(new Date().toTimeString(herbirthday));
console.log(new Date().toISOString(herbirthday));

// Lets declarea custom date in date object where the .todatestring is used to format 
let myEmidatebe = new Date(2026, 01, 20);
console.log(myEmidatebe.toDateString());

// Lets get the individual components of date and time using get methods.
console.log(myEmidatebe.getMonth());
console.log(myEmidatebe.getMonth() + 1); // Adding 1 to get the correct month number
console.log(myEmidatebe.getDate());
console.log(myEmidatebe.getFullYear());

// To define an individeual property of date object we can use set methods.
myEmidatebe.setFullYear(2025);
console.log(myEmidatebe.toDateString());
let chickenDinnerDay = new Date();
chickenDinnerDay.toLocaleString('default', {
    month: "long",
    day: "2-digit",
});
console.log(chickenDinnerDay);