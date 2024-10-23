//NOTE:
// ?Higher Order Function
//Higher order functions are functions which take other function as a parameter or return a function as a value. The function passed as a parameter is called callback.
//?Callback
//A callback is a function which can be passed as parameter to other function. See the example below.

// callback function
function showName(name) {
  console.log(`My name is ${name}`);
}
// High order function
function userName(firstName, cb) {
  return cb(firstName);
}
userName("Vansh", showName); // My name is Vansh

// Higher order function returning an other function
const higherOrder = (n) => {
  const doSomething = (m) => {
    const doWhatEver = (t) => {
      return 2 * n + 3 * m + t;
    };
    return doWhatEver;
  };
  return doSomething;
};
console.log(higherOrder(2)(3)(10));

//Let us see were we use call back functions. For instance the forEach method uses call back.

const numbers = [1, 2, 3, 4];
const sumArray = (arr) => {
  let sum = 0;
  arr.forEach(function (element) {
    sum += element;
  });
  return sum;
};
console.log(sumArray(numbers));

//? setInterval
//The setInterval global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback will be always called in that interval of time.

//DOCS:
// syntax
function callback() {
  // code goes here
  //  setInterval(callback, duration);
}

function sayHello() {
  console.log("Hello");
}
//setInterval(sayHello, 1000) // it prints hello in every second, 1000ms is 1s

//?Setting a time using a setTimeout
function sayHello() {
  console.log("Hello");
}
setTimeout(sayHello, 2000); // it prints hello after it waits for 2 seconds.

/*   Exercises: Level 1
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
Define a callback function before you use it in forEach, map, filter or reduce.


Use map to map the products array to its corresponding prices.
Use filter to filter out countries containing land.
Use filter to filter out countries having six character.
Use filter to filter out countries containing six letters and more in the country array.
Use filter to filter out country start with 'E';
Use filter to filter out only prices with values.
Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
Use reduce to sum all the numbers in the numbers array.
Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
Explain the difference between some and every
Use some to check if some names' length greater than seven in names array
Use every to check if all the countries contain the word land
Explain the difference between find and findIndex.
Use find to find the first country containing only six letters in the countries array
Use findIndex to find the position of the first country containing only six letters in the countries array
Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

 **/

//? Explain the difference between forEach, map, filter, and reduce.
// DOCS :
// forEach - only for arrays.It iterates an array element.
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
countries.forEach((element) => console.log("forEach =", element.toUpperCase()));

// DOCS :
// map- Iterate an array elements and modify the array elements.It also retuen a new array
const numbers2 = [1, 2, 3, 4, 5];
const numbersSquare = numbers2.map((num) => num * num);
console.log("map", numbersSquare);

//  DOCS :
// filter -Filter out items which fulfill filtering conditions and return a new array.
const countriesHave5Letter = countries.filter((country) => country.length <= 6);
console.log("filter", countriesHave5Letter);

//  DOCS :
/* 
reduce: Reduce takes a callback function and returns a single value. It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array first value. If our array is an empty array, then Javascript will throw an error.
**/
const numbers3 = [1, 2, 3, 4, 5];
const sum = numbers3.reduce((acc, cur) => acc + cur, 0);
console.log("reduce", sum);

// DOCS 
// find: Return the first element which satisfies the condition
const names1 = ["Appukutty",'Asabeneh', 'Mathias', 'Elias', 'Brook']
const result1 = names1.find((name) => name.length > 7)
console.log(result1)

// DOCS :
// findIndex: Return the position of the first element which satisfies the condition
const names2 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const result = names2.findIndex((name) => name.length > 7)
console.log(result) // 0

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

//? Use forEach to console.log each country in the countries array.
countries.forEach((element) => console.log(element));

//? Use forEach to console.log each name in the names array.
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
names.forEach((ele) => console.log(ele));

//Map
//?Use map to create a new array by changing each country to uppercase in the countries array.
const mapRes = countries.map((country) => country.toUpperCase());
console.log(mapRes);

//?Use map to create an array of countries length from countries array.
const mapLen = countries.map((country) => country.length);
console.log("mapLen = ",mapLen);

//?Use map to create a new array by changing each number to square in the numbers array.
const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mapSquare = numbers4.map((num) => num * num);
console.log("map square = ",mapSquare);


