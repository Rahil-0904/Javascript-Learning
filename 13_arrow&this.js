// function myLife() {
//     life = "sucks";
//     condition = "Poor",
//     console.log(this.life);
// }

// myLife(life = "preety fucked")

const myLife = { // Using this keyword in a object it dosent work in functions 
    life: "sucks",
    condition: "Poor",
    deadbody: function(){
        console.log(`${this.life}`) // Here The "this" keyword is used to print life key's value.
    }
}

myLife.life = "preety fucked" // Here the value is changed
myLife.deadbody()

// Arrow function is short term to declare a function
// with () => {}
    // It can be stored in a variable

const myMathSkills = (num01, num02) => { 
    return num01 + num02
}

console.log(myMathSkills(1, 2));

// IMPLICIT RETURN METHOD === is a way to bypass retun keyword

const myValue = (num03, num04) => (num03 - num04) // Using parenthesis insted of Curly braces to use return function in Arrow funtion. 

console.log(myValue(2, 2));
