//HACK:

// can be also shorten like this, sum += num
// after this we will use the shorter synthax((sum += num),+=, -=, *=, /= etc)

/*
Exercises: Level 1
?Questions
const countries = ['Albania', 'Bolivia', 'Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya']

const webTechs = ['HTML','CSS', 'JavaScript','React','Redux','Node','MongoDB']

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

Iterate 0 to 10 using for loop, do the same using while and do while loop

Iterate 10 to 0 using for loop, do the same using while and do while loop

Iterate 0 to n using for loop

Write a loop that makes the following pattern using console.log():

    #
    ##
    ###
    ####
    #####
    ######
    #######
Use loop to print the following pattern:

0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
Using loop print the following pattern

 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
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

//Peint all arr toUpperCase()
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

//print/iterate 10 to 0
function printAllElem4(arr) {
  //  const newArr1 = [];
  //  for (let i = 0; i < arr.length; i++) {
  //    newArr1.push(arr[i]);
  //    newArr1.reverse();
  //    //arr.reverse();
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

const reverseArr = sentence.reverse();
console.log("reverse", reverseArr);

const number = [1, 2, 3, 4, 5, 6];
number.reverse();

console.log(number);

// while loop
//NOTE:
//While the condition is truthy, the code from the loop body is executed.

let i = 0;
const newArr = [];
while (i < countries.length) {
  newArr.push(countries[i]);
  i++;
}
console.log(newArr);

i = 0;
const newArr1 = [];
while (i < sentence.length) {
  newArr1.push(sentence[i].toUpperCase());
  i++;
}
console.log(newArr1);
//NOTE:
//If i++ was missing from the example above, the loop would repeat (in theory) forever. In practice, the browser provides ways to stop such loops, and in server-side JavaScript, we can kill the process.

let iA1 = 3;
while (iA1) {
  // when i becomes 0, the condition becomes falsy, and the loop stops
  console.log(iA1);
  iA1--;
}

// do while
//NOTE:
//The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.
//This form of syntax should only be used when you want the body of the loop to execute at least once regardless of the condition being truthy. Usually, the other form is preferred: while(…) {…}.

i = 0;
do {
  console.log(i);
  i++;
} while (i <= 5);

//let i2 = 0;
//let newArr3 = [];
//do {
//  //  console.log(i2);
//  newArr3 = [...newArr3, 10];
//  i++;
//} while (i2 < 5);
//console.log(newArr3);

// for in loop only for object.
//const user = {
//  name: "Pappu",
//  breed: "Golden",
//  age: "2years",
//};
//for (key in user) {
//  console.log(key);
//  user[key] = user[key].toLowerCase();
//}
