//! OBJECTS
// ?Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.
// solution

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

console.log(user, user.name);

//? Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
let salaries1 = {};
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum); // 390

console.log(salaries.John + salaries.Ann + salaries.Pete);
console.log(salaries1);

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
//Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.
//P.S. Use typeof to check for a number here.

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
  //console.log(obj);
}

multiplyNumeric(menu);
