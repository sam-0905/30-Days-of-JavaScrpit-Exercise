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

Use for loop to iterate from 0 to 100 and print only even numbers

Use for loop to iterate from 0 to 100 and print only odd numbers

Use for loop to iterate from 0 to 100 and print only prime numbers

Use for loop to iterate from 0 to 100 and print the sum of all numbers.

The sum of all numbers from 0 to 100 is 5050.
Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

  [2550, 2500]
Develop a small script which generate array of 5 random numbers

Develop a small script which generate array of 5 random numbers and the numbers must be unique

Develop a small script which generate a six characters random id:

5j2khz

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
    //evenArr.push(i);
    //console.log(evenArr);
  }
  return evenArr;
}

console.log("even", PrintEvenNum());

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

function printPrimeNum() {
  const newPrimeNum = [];
  for (let i = 0; i <= 100; i++) {
    //console.log(i > 1, i % 1);
    if (i > 1 && i % 1) {
      //console.log(i);
      newPrimeNum.push(i);
    }
  }
  return newPrimeNum;
}

printPrimeNum();

//function printPrimeNum() {
//  const newPrimeNum = [];
//  for (let i = 0; i <= 100; i++) {
//    if (isPrime(i)) {
//      newPrimeNum.push(i);
//    }
//  }
//  return newPrimeNum;
//}

//printPrimeNum();

function sumOfAllNum() {
  let sum = 0;
  for (let i = 0; i <= 100; i++) {
    sum += i;
  }
  //console.log(sum);
  return sum;
}

console.log("sum = ", sumOfAllNum());

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

  //DOCS: If the key and value of the object is same then we could use  { evenSum, oddSum }
  //return { evenSum, oddSum };

  //DOCS: If the key and value of the object is different then we could use  { even: evenSum, odd: oddSum }
  return { evenSumOfNums: evenSum, oddSumOfNums: oddSum };
}

console.log("Even and Odd sum:", sumOfAllEvenAndOddNum());
