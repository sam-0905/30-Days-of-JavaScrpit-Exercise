//Exercises: Level 1
//1.Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

//2.Check if type of '10' is equal to 10

//3.Check if parseInt('9.8') is equal to 10

//4.Boolean value is either true or false.
//-Write three JavaScript statement which provide truthy value.
//-Write three JavaScript statement which provide falsy value.

//5.Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

//4 > 3 true
//4 >= 3 true
//4 < 3
//4 <= 3
//4 == 4
//4 === 4
//4 != 4
//4 !== 4
//4 != '4'
//4 == '4'
//4 === '4'

//Find the length of python and jargon and make a falsy comparison statement.

//6.Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
//4 > 3 && 10 < 12
//4 > 3 && 10 > 12
//4 > 3 || 10 < 12
//4 > 3 || 10 > 12
//!(4 > 3)
//!(4 < 3)
//!(false)
//!(4 > 3 && 10 < 12)
//!(4 > 3 && 10 > 12)
//!(4 === '4')

//There is no 'on' in both dragon and python

//7.Use the Date object to do the following activities

//What is the year today?
//What is the month today as a number?
//What is the date today?
//What is the day today as a number?
//What is the hours now?
//What is the minutes now?
//Find out the numbers of seconds elapsed from January 1, 1970 to now.

const firstName = "allan";
const lastName = "allan";
const country = "vietnam";
const age = 23;
const city = "trichy";
const isMarried = false;
const year = 2001;

//console.log("appu");
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof age);
console.log(typeof city);
console.log(typeof isMarried);
console.log(typeof year);

const checkType = "10" == 10;
console.log(checkType);

const Checking = parseInt("9.8") === 10;
console.log(Checking);

let truValue = 4 > 3; // true
let falseValue = 4 < 3;
console.log(truValue, falseValue);

let store = null;
let num = 0;
let data;
console.log(store, num, data);

//5.Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
//
console.log(4 == 4);
console.log(4 === 4);
// != => X!=Y
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
//
console.log(4 == "4");
console.log(4 === "4");

const str_1 = "python";
const str_2 = "jargon";
console.log(str_1.length, str_2.length);
console.log(str_1.length === str_2.length);

//6.Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log("appu");
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
//
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === "4"));

//date with time & day
const now = new Date();
console.log(now);
//year
const thisYear = new Date();
console.log(thisYear.getFullYear());
//todayDate
const todayDate = new Date();
console.log(todayDate.getDate());
//day
const now_1 = new Date();
console.log(now_1.getDay());
// 3, because the day is Wednesday which is the 7th day
//  Sunday is 0, Monday is 1 and Saturday is 6
// Getting the weekday as a number (0-6)

//Getting month
//Let's extract or get the month from a time object.
const now_3 = new Date();
console.log(now_3.getMonth()); // 0, because the month is January,  month(0-11)

//Getting hours
//Let's extract or get the hours from a time object.
const now_4 = new Date();
console.log(now_4.getHours()); // 0, because the time is 00:56:41

//Getting minutes
//Let's extract or get the minutes from a time object.
const now_5 = new Date();
console.log(now_5.getMinutes()); // 56, because the time is 00:56:41

//Getting seconds
//Let's extract or get the seconds from a time object.

const now_6 = new Date();
console.log(now_6.getSeconds()); // 41, because the time is 00:56:41

//Getting time
//This method give time in milliseconds starting from January 1, 1970. It is also know as Unix time. We can get the unix time in two ways:

//Using getTime()
const now_7 = new Date(); //
console.log(now_7.getTime()); // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

//Using Date.now()
const allSeconds = Date.now(); //
console.log(allSeconds); // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

console.log(
  "Let us format these values to a human readable time format. Example:"
);
const now_$ = new Date();
const year_$ = now.getFullYear(); // return year
const month = now.getMonth() + 1; // return month(0 - 11)
const date = now.getDate(); // return date (1 - 31)
const hours = now.getHours(); // return number (0 - 23)
const minutes = now.getMinutes(); // return number (0 -59)

console.log(`${date}/${month}/${year_$} ${hours}:${minutes}`); // 4/1/2020 0:56

//$$$$$$$$$$$$$$$$$$$$//
////Exercises: Level 2
//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle(area = 0.5 x b x h).

//const base = prompt("enter base:");
//const height = prompt("enter height:");
//const area = 0.5 * base * height;
//alert(
//  `area of the triangle having ${base}ft and area of the triangle having ${height}ft and the area is ${area}`
//);
//console.log(base, height, area);

const sideA = +prompt(`side a: `);
const sideB = +prompt(`side b: `);
const sideC = +prompt(`side c: `);
console.log(sideA, sideB, sideC);
const perimeter = sideA + sideB + sideC;
console.log(perimeter);
alert(`The perimeter of the triangle is ${perimeter}`);

//Enter base: 20
//Enter height: 10
//The area of the triangle is 100
//Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

//Enter side a: 5
//Enter side b: 4
//Enter side c: 3
//The perimeter of the triangle is 12

//Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

//Calculate the slope, x-intercept and y-intercept of y = 2x -2

//Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

//Compare the slope of above two questions.

//Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

//Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

//Enter hours: 40
//Enter rate per hour: 28
//Your weekly earning is 1120
//If the length of your name is greater than 7 say, your name is long else say your name is short.

//Compare your first name length and your family name length and you should get this output.

//let firstName = 'Asabeneh'
//let lastName = 'Yetayeh'
//Your first name, Asabeneh is longer than your family name, Yetayeh
//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

//let myAge = 250
//let yourAge = 25
//I am 225 years older than you.
//Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

//Enter birth year: 1995
//You are 25. You are old enough to drive

//Enter birth year: 2005
//You are 15. You will be allowed to drive after 3 years.
//Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

//Enter number of years you live: 100
//You lived 3153600000 seconds.
//Create a human readable time format using the Date time object

//YYYY-MM-DD HH:mm
//DD-MM-YYYY HH:mm
//DD/MM/YYYY HH:mm

//Exercises: Level 3
//Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
//YYY-MM-DD HH:mm eg. 20120-01-02 07:05
