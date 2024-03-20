//HACK:
// can be also shorten like this, sum += num
// after this we will use the shorter synthax((sum += num),+=, -=, *=, /= etc)

/*
Exercises: Level 1
? Questions
const countries = ['Albania', 'Bolivia', 'Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya']

const webTechs = ['HTML','CSS', 'JavaScript','React','Redux','Node','MongoDB']

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

Iterate 0 to 10 using for loop, do the same using while and do while loop

Iterate 10 to 0 using for loop, do the same using while and do while loop

Iterate 0 to n using for loop

**/

const countries = [
  "US",
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

// print/iterate 0 to 10 /Print all entries in array.
function printAllElem(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(printAllElem(countries));

//Print all arr toUpperCase()
function printAllElem2(arr) {
  const newArr1 = [];
  for (let i = 0; i < arr.length; i++) {
    newArr1.push(arr[i].toUpperCase());
  }
  return newArr1;
}
console.log(printAllElem2(countries));

//print array is less than five charactrers
function printAllElem3(arr) {
  const newArr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length <= 5) {
      newArr1.push(arr[i]);
    }
  }
  return newArr1;
}
console.log(printAllElem3(countries));

//NOTE: Reverse An array
function printAllElem4(arr) {
  //  const newArr1 = [];
  //  for (let i = 0; i < arr.length; i++) {
  //    newArr1.push(arr[i].reverse());
  //!    newArr1.reverse();
  //  }
  //  return newArr1;
  return arr.reverse();
}

console.log("Reversed:", printAllElem4(countries));

const sentence = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle and Amazon are big IT companies",
];
//NOTE:
//Reverse An array
const reverseArr = sentence.reverse();
console.log("reverse", reverseArr);

const number = [1, 2, 3, 4, 5, 6];
number.reverse();

console.log(number);

//DOCS:  while loop
//While the condition is truthy, the code from the loop body is executed.

//Print all the entries in array
let i = 0;
const newArr = [];
while (i < sentence.length) {
  newArr.push(sentence[i]);
  i++;
}
console.log("While loop....", newArr);

//Print all the entries in array in [caps]
i = 0;
const newArr1 = [];
while (i < sentence.length) {
  newArr1.push(sentence[i].toUpperCase());
  i++;
}
console.log(newArr1);

//NOTE:
//If i++ was missing from the example above, the loop would repeat (in theory) forever. In practice, the browser provides ways to stop such loops, and in server-side JavaScript, we can kill the process.

//For instance, a shorter way to write while (i != 0) is while (i):
let i2 = 3;
while (i2) {
  // when i becomes 0, the condition becomes falsy, and the loop stops
  console.log("From while loop..", i2);
  i2--;
}

//DOCS: do while loop
//The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.
//This form of syntax should only be used when you want the body of the loop to execute at least once regardless of the condition being truthy. Usually, the other form is preferred: while(…) {…}.

i = 0;
do {
  console.log("do while loop....", i);
  i++;
} while (i <= 3);

//DOCS: for in loop
//for in loop only for object.
const user = {
  name: "Pappu",
  breed: "Golden",
  age: "2years",
};
for (key in user) {
  console.log(key);
  user[key] = user[key].toLowerCase();
}
console.log("object...", user);

//DOCS: for of loop - Arrays,Strings,Maps
//We use for of loop for arrays. It is very hand way to iterate through an array if we are not interested in the index of each element in the array.

const countries1 = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
const newArr12 = [];
for (const country of countries1) {
  newArr12.push(country.toUpperCase());
}
console.log(newArr12);

//!break
//Break is used to interrupt a loop.

for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log("break", i);
}

//!continue
//We use the keyword continue to skip a certain iterations.

for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log("continue", i);
}

//?
//Use loop to print the following pattern:
//0 x 0 = 0
//1 x 1 = 1
//2 x 2 = 4
//3 x 3 = 9
//4 x 4 = 16
//5 x 5 = 25
//6 x 6 = 36
//7 x 7 = 49
//8 x 8 = 64
//9 x 9 = 81
//10 x 10 = 100

function multiplyAllElem() {
  for (let i = 0; i <= 10; i++) {
    console.log(`${i} * ${i} = ${i * i}`);
  }
}

multiplyAllElem();

//?
//Write a loop that makes the following pattern using console.log():
//    #
//    ##
//    ###
//    ####
//    #####
//    ######
//    #######

function PrintTheFollParten() {
  console.log("printing .........");
  for (let i = 0; i < 8; i++) {
    console.log("#".repeat(i));
  }
}

PrintTheFollParten();

//?
//Using loop print the following pattern
// i    i^2   i^3
// 0    0     0
// 1    1     1
// 2    4     8
// 3    9     27
// 4    16    64
// 5    25    125
// 6    36    216
// 7    49    343
// 8    64    512
// 9    81    729
// 10   100   1000

function PrintSquareCubeElem() {
  console.log("i", "i^2", "i^3 .......");

  for (let i = 0; i <= 10; i++) {
    console.log(`${i} ${i * i} ${i * i * i}`);
  }
}

PrintSquareCubeElem();

//? Use for loop to iterate from 0 to 100 and print only even numbers

function PrintEvenNum() {
  const evenArr = [];
  const oddArr = [];
  for (let i = 0; i <= 100; i++) {
    //console.log(i % 2 === 0);
    if (i % 2 === 0) {
      evenArr.push(i);
    } else {
      oddArr.push(i);
    }
    //! If we console here it print each and every number in single time & not in an array
    //evenArr.push(i);
    //console.log(evenArr);
  }
  return evenArr;
}

console.log("even", PrintEvenNum());

//? Use for loop to iterate from 0 to 100 and print only odd numbers

const PrintOddNum = () => {
  const oddArr = [];
  for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
      oddArr.push(i);
    }
  }
  return oddArr;
};

console.log("odd", PrintOddNum());

//?Use for loop to iterate from 0 to 100 and print only prime numbers
/*
In this JavaScript code:
- We start iterating from 2 up to 100 using a for loop.
- For each number, we initialize a variable isPrime to true.
- We then check divisibility of the current number by integers from 2 up to its square root. If it's      
  divisible by any number in this range, we set isPrime to false and break out of the inner loop.
- After the inner loop, if isPrime remains true, it means the number is prime, so we print it using console.log().
**/

function printPrimeNum() {
  const newArr = [];

  for (let num = 2; num <= 100; num++) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      //console.log(num);
      newArr.push(num);
    }
  }
  return newArr;
}

console.log("Prime Numbers..", printPrimeNum());

//?The sum of all numbers from 0 to 100 is 5050.

function sumOfAllNum() {
  let sum = 0;
  for (let i = 0; i <= 100; i++) {
    sum += i;
  }
  //console.log(sum);
  return sum;
}

console.log("sum = ", sumOfAllNum());

//?The sum of all evens from 0 to 100 is 2550.
function sumOfAllEvenNum() {
  let sum = 0;
  for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  //console.log(sum);
  return sum;
}

console.log("sum of Even numbers", sumOfAllEvenNum());

//?And the sum of all odds from 0 to 100 is 2500.

function sumOfAllOddNum() {
  let sum = 0;
  for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  //console.log(sum);
  return sum;
}

console.log("sum of odd numbers", sumOfAllOddNum());

//?Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array [2550, 2500]

function sumOfAllEvenAndOddNum() {
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
      evenSum += i;
    } else {
      oddSum += i;
    }
  }
  return [evenSum, oddSum];

  //! In case of objects
  //DOCS: If the key and value of the object is same then we could use  { evenSum, oddSum }
  //return { evenSum, oddSum };

  //DOCS: If the key and value of the object is different then we could use  { even: evenSum, odd: oddSum }
  return { evenSumOfNums: evenSum, oddSumOfNums: oddSum };
}

console.log("Even and Odd sum:", sumOfAllEvenAndOddNum());

//? Develop a small script which generate array of 5 random numbers
function generateRandomArray(length, min, max) {
  let randomArray = [];
  for (let i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomArray.push(randomNumber);
  }
  return randomArray;
}

const arrayLength = 5;
const minValue = 1;
const maxValue = 100;

const randomArray = generateRandomArray(arrayLength, minValue, maxValue);
console.log("Generated Random Array:", randomArray);

//? Develop a small script which generate a six characters random id:e.g.5j2khz

const randomId = generateRandomId();
console.log("Generated Random ID:", randomId);

function generateRandomId() {
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < 6; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return id;
}

//? Develop a small script which generate array of 5 random numbers and the numbers must be unique

const arrayLength3 = 5;
const minValue3 = 1;
const maxValue3 = 100;

const randomArray3 = generateUniqueRandomArray(
  arrayLength3,
  minValue3,
  maxValue3
);
console.log("Generated Unique Random Array:", randomArray3);

function generateUniqueRandomArray(length, min, max) {
  if (max - min + 1 < length) {
    throw new Error(
      "Cannot generate unique numbers with the given range and length"
    );
  }

  let randomArray = [];
  while (randomArray.length < length) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!randomArray.includes(randomNumber)) {
      randomArray.push(randomNumber);
    }
  }
  return randomArray;
}

//?Develop a small script which generate any number of characters random id:

function generateRandomId2(length) {
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < length; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return id;
}

const numberOfCharacters = 20; // Change this to generate IDs with different lengths
const randomId2 = generateRandomId2(numberOfCharacters);
console.log("Generated Random ID:", randomId2);

// ?Write a script which generates a random rgb color number.

function generateRandomRGBColor() {
  const red = Math.floor(Math.random() * 256); // Random integer between 0 and 255
  const green = Math.floor(Math.random() * 256); // Random integer between 0 and 255
  const blue = Math.floor(Math.random() * 256); // Random integer between 0 and 255
  return `rgb(${red}, ${green}, ${blue})`;
}

const randomColor = generateRandomRGBColor();
console.log("Generated Random RGB Color:", randomColor);

//?Using the above countries array, create an array for countries length'.

const countriesLength = countries.map((country) => country.length);
console.log("Length of each country name:", countriesLength);
