//console.log(hello);

/*
//Exercises: Level 1
1.Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
Enter your age: 30
You are old enough to drive.
Enter your age:15
You are left with 3 years to drive.


2.Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
Enter your age: 30
You are 5 years older than me.

3.If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
-using if else
-ternary operator.
  let a = 4
  let b = 3
  4 is greater than 3

4.Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
Enter a number: 2
2 is an even number

Enter a number: 9
9 is is an odd number.
**/

//let userAge = prompt("Enter your age :  ");

function checkUserAge() {
  if (userAge >= 18) {
    return "You are old enough to drive.";
  } else {
    return `You are left with ${18 - userAge} years to drive.`;
  }
}

//console.log(checkUserAge());

//let yourAge = prompt("Enter your age :  ");
let myAge = 23;

function checkAgeDiff() {
  if (yourAge > myAge) {
    return `You are ${yourAge - myAge} years older than me.`;
  } else {
    return `I am ${myAge - yourAge} years older than you  .`;
  }
}

//console.log(checkAgeDiff());

let a = 4;
let b = 10;

//let checkAOrB = checkAOrB ? a > b : console.log(a) ? b > a : console.log(b);

function checkNum() {
  if (a > b) {
    return `${a} is greater than ${b}`;
  } else {
    return `${b} is greater than ${a}`;
  }
}

console.log(checkNum());
//console.log(checkAOrB);

let number = prompt(`Enter a number`);
console.log(number);

function checkEvenOrOdd() {
  if (number % 2 === 0) {
    return `${number} it is even number`;
  } else {
    return `${number} it is odd number`;
  }
}

console.log(checkEvenOrOdd());

/*
//Exercises: Level 2
Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.

    **/
/*
//Exercises: Level 3
Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.
Write a program which tells the number of days in a month, now consider leap year.
**/
