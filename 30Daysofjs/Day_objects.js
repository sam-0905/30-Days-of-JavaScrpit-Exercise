//NOTE:
// ? CONCEPTS
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

//! Object.assign: To copy an object without modifying the original object
const copyPerson = Object.assign({}, person);
console.log(copyPerson);

// creating 3 object constructors and assigning values to it
let obj1 = { a: 10 };
let obj2 = { b: 20 };
let obj3 = { c: 30 };

// Creating a target object and copying values
// and properties to it using object.assign() method
let new_obj = Object.assign({}, obj1, obj2, obj3);

// Displaying the target object
console.log(new_obj);

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true

//! Object.keys - To get the keys or properties of an object as an array
const keys = Object.keys(copyPerson);
console.log(keys); //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address);
console.log(address); //['street', 'pobox', 'city']

//?Object.values:To get values of an object as an array
const values = Object.values(copyPerson);
console.log(values);

const object1 = {
    a: "somestring",
    b: 42,
    c: false,
};

console.log(Object.values(object1));
// Expected output: Array ["somestring", 42, false]

//! Object.entries -To get the keys and values in an array
const entries = Object.entries(copyPerson);
console.log(entries);

const object2 = {
    a: "somestring",
    b: 42,
};

for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
}

// Expected output:
// "a: somestring"
// "b: 42"

//? hasOwnProperty: To check if a specific key or property exist in an object
console.log(copyPerson.hasOwnProperty("name"));
console.log(copyPerson.hasOwnProperty("score"));

const object3 = {};
object3.property1 = 42;

console.log(object3.hasOwnProperty("property1"));
// Expected output: true

console.log(object3.hasOwnProperty("toString"));
// Expected output: false