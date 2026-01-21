// Use of backticks to print a multi-line string

const lenovoLegionspecsheet = `Ryzen9 5900HX` +
                     `NVIDIA RTX 3070` +
                     `16GB RAM` +
                     `1TB SSD`;

const appleMacBookspecsheet = `M1 Pro Chip` +
                        `16GB RAM` +
                        `512GB SSD` +
                        `Retina Display`;

console.log(typeof lenovoLegionspecsheet);
console.log(typeof appleMacBookspecsheet);
console.log(lenovoLegionspecsheet + appleMacBookspecsheet);

// lets do this with sting interpolation

console.log( `Windows Laptop Specs: ${lenovoLegionspecsheet} and MacBook Specs: ${appleMacBookspecsheet}`);

// Another way to declare a string is with (new) keyword to use javascript objects like ---

const sonyPlaystation5specsheet = new String(`AMD Ryzen Zen 2`);
console.log(typeof sonyPlaystation5specsheet);
console.log(sonyPlaystation5specsheet);  

// Some example of using keywords and methods with string objectnode.

// To know the character at a particular position.
console.log(sonyPlaystation5specsheet[3]);

// To know the length of the string.
console.log(sonyPlaystation5specsheet.length);

// To convert variable in Uppercase or Lowercase.
console.log(sonyPlaystation5specsheet.toUpperCase());
console.log(sonyPlaystation5specsheet.toLowerCase());

// To search for a particular character in string.
console.log(sonyPlaystation5specsheet.includes("Zen"));
console.log(sonyPlaystation5specsheet.startsWith("AMD"));
console.log(sonyPlaystation5specsheet.endsWith("2"));

// To know the position of a charcater in particular string.
console.log(sonyPlaystation5specsheet.indexOf("Ryzen"));

// To Divide a variable in Sub strings and can also be used negative numbers which leads to reverse selection (Note - last character is does not count).
console.log(sonyPlaystation5specsheet.slice(-15, 10));
console.log(sonyPlaystation5specsheet.substring(4, 10));

// To remove extra spaces from the string.
const nintendoSwitchspecsheet = "   NVIDIA Custom Tegra X1   "
console.log(nintendoSwitchspecsheet.trim());

// To replace a particular string with another string.
console.log(nintendoSwitchspecsheet.replace("NVIDIA", "AMD"));

// Either way it dosent change the value of the string as learned in Stack memory lesson.





