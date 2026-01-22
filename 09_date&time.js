// DATE AND TIME IN JAVASCRIPT

// Date object is used to work with dates and times in JavaScript.
// Which starts from January 1, 1970 (UTC).
let myBirthday = new Date();
console.log(myBirthday);
console.log(typeof myBirthday);

// Month in Date object is 0 indexed.
let herbirthday = new Date(2000, 05, 23); // Year, Month (0-11), Day
console.log(herbirthday);

// To format date formats we can use different methods available with Date object.
console.log(new Date().toLocaleString(herbirthday));
console.log(new Date().toDateString(herbirthday));
console.log(new Date().toTimeString(herbirthday));
console.log(new Date().toISOString(herbirthday));