// DOCS:
//Function starting with…
//• "get…" – return a value,
//• "calc…" – calculate something,
//• "create…" – create something,
//• "check…" – check something and return a boolean, etc.

//Examples of such names:
//showMessage(..)     // shows a message
//getAge(..)          // returns the age (gets it somehow)
//calcSum(..)         // calculates a sum and returns the result
//createForm(..)      // creates a form (and usually returns it)
//checkPermission(..) // checks a permission, returns true/false

//For example, the jQuery framework defines a
// - function with $. The Lodash library has its core
// - function named _.

// todo:
//Exercises: Level 1

//?Declare a function fullName and it print out your full name.
function fullName() {
  var firstName = "allan";
  var secondName = "sam";
  var fullName = firstName + " " + secondName;
  return fullName;
}

console.log(fullName());

//?Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName2(firstName, secondName) {
  var firstName;
  var secondName;
  var fullName = firstName + " " + secondName;
  return fullName;
}

console.log(fullName2("allan", "sam"));

//?Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(numOne, numTwo) {
  let sum = numOne + numTwo;
  console.log(sum);
  return sum;
}

addNumbers(10, 5);

//?An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle() {
  const length = 15;
  const width = 10;
  const areaFormula = length * width;
  console.log(areaFormula);
}
areaOfRectangle();

//?A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle() {
  const length = 15;
  const width = 10;
  const perimeterFormula = 2 * (length + width);
  console.log(perimeterFormula);
}
perimeterOfRectangle();

//A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

//Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

//Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

//Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

//Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

//Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

//Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

//Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

//The same groups apply to both men and women.
//Underweight: BMI is less than 18.5
//Normal weight: BMI is 18.5 to 24.9
//Overweight: BMI is 25 to 29.9
//Obese: BMI is 30 or more
//Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

//Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

//console.log(findMax(0, 10, 5))
//10
//console.log(findMax(0, -10, -2))
//0
//Exercises: Level 2
//Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

//Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

//console.log(solveQuadratic())
