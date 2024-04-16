//NOTE:
a = "appu";
b = 10;

function letsLearnScope() {
    console.log(a, b);
    if (true) {
        console.log(a, b);
    }
}
console.log(a, b); // accessible

//scope.js
let c = "JavaScript2"; // is a global scope it will be found anywhere in this file
let d = 15; // is a global scope it will be found anywhere in this file
function letsLearnScope() {
    console.log(c, d); // JavaScript 10, accessible
    if (true) {
        let c = "Python";
        let d = 100;
        console.log(c, d); // Python 100
    }
    console.log(c, d);
}
letsLearnScope();
console.log(c, d); // JavaScript 10, accessible

const person = {
    firstName: "Asabeneh",
    lastName: "Yetayeh",
    age: 250,
    country: "Finland",
    city: "Helsinki",
    skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node",
        "MongoDB",
        "Python",
        "D3.js",
    ],
    isMarried: true,
};
console.log(person);

// accessing values using .
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.location); // undefined

// value can be accessed using square bracket and key name
console.log(person["firstName"]);
console.log(person["lastName"]);
console.log(person["age"]);
console.log(person["age"]);
console.log(person["location"]); // undefined

// for instance to access the phone number we only use the square bracket method
console.log(person["phone number"]);