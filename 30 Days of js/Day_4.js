/*
Exercise: Level 1
const countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya']

const webTechs = [ 'HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']
----------------------------------------------------------------------------------------------------------
1.Declare an empty array;
2.Declare an array with more than 5 number of elements
3.Find the length of your array
4.Get the first item, the middle item and the last item of the array
5.Declare an array called mixedDataTypes, put different data types in the array and find the length of the 6.array. The array size should be greater than 5
6.Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
      -Print the array using console.log()
      -Print the number of companies in the array
      -Print the first company, middle and last company
      -Print out each company
      -Change each company name to uppercase one by one and print them out

7.Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
8.Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
Filter out companies which have more than one 'o' without the filter method
Sort the array using sort() method
Reverse the array using reverse() method
Slice out the first 3 companies from the array
Slice out the last 3 companies from the array
Slice out the middle IT company or companies from the array
Remove the first IT company from the array
Remove the middle IT company or companies from the array
Remove the last IT company from the array
Remove all IT companies
**/

//const newCountries = require("./countries");

const countries = [
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

const arr = [];
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

console.log(webTechs.length);
//console.log(webTechs.slice(2));

function findArrayFirMidLastElem(arr) {
  var result = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      i === 0 ||
      i === Math.ceil(arr.length / 2) - 1 ||
      i === arr.length - 1
    ) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(findArrayFirMidLastElem(webTechs));
console.log(findArrayFirMidLastElem(countries));

const mixedDataTypes = [
  "Asabeneh",
  250,
  { skills: ["HTML", "CSS", "JS", "React", "Python"] },
  true,
  null,
  { country: "Finland", city: "Helsinki" },
];
console.log(
  typeof mixedDataTypes[0],
  typeof mixedDataTypes[1],
  typeof mixedDataTypes[2],
  typeof mixedDataTypes[3],
  typeof mixedDataTypes[4]
);
console.log(mixedDataTypes, mixedDataTypes.length);

const companies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle and Amazon",
];

//console.log(companies, companies.length);
console.log(companies.includes("Google"));

function findArrayFirMidLastElem2(arr1) {
  var result1 = [];
  for (let i = 0; i < arr1.length; i++) {
    if (
      i === 0 ||
      i === Math.ceil(arr1.length / 2) - 1 ||
      i === arr1.length - 1
    ) {
      result1.push(arr1[i]);
    }
  }
  return result1;
}

console.log(findArrayFirMidLastElem2(companies));

function printEachItemInAnArray(arr2) {
  for (let i = 0; i < arr2.length; i++) {
    var elements = arr2[i];
    console.log(elements);
  }
  return elements;
}

//var name = "allan";
//console.log(name.toUpperCase());

console.log(printEachItemInAnArray(companies));

function printEachItemInAnArray2(arr2) {
  for (let i = 0; i < arr2.length; i++) {
    var elements = arr2[i].toUpperCase();
    console.log(elements);
  }
  return elements;
}

console.log(printEachItemInAnArray2(companies));

const sentence = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle and Amazon are big IT companies",
];
console.log(sentence);
console.log("sentence =>", sentence.toString());
console.log("sort", sentence.sort());

const reverseArr = sentence.reverse();
console.log("reverse", reverseArr);
console.log(sentence.includes("Apple"));
console.log("slice", sentence.slice());
console.log("slice", sentence.slice(4));
//console.log("remove", sentence);
//shift() // -> remove one item from the beginning
console.log("remove1", sentence.shift());

const remEle = sentence.shift(Math.ceil(sentence.length / 2) - 1);
console.log("remove1", remEle);

const remLastEle = sentence.shift(sentence.length - 1);
console.log("remove1", remLastEle);
//console.log(first);
//const res = sentence.find((el) => el > "o" === "o");
//console.log(res);

// POP() -remove one item from the end
console.log(sentence.pop());

const numbers = [1, 2, 3, 4, 5];
numbers.pop(); // -> remove one item from the end
console.log(numbers);
console.log(numbers.reverse());

//splice -The Array.splice() method adds and removes array elements:
const remAllEle = sentence.splice();
console.log(remAllEle);

/*
Exercise: Level 2
**/
//console.log(newCountries.length);

//1.First remove all the punctuations and change the string to array and count the number of words in the array

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

const words = text.split(" ");

console.log(words);
console.log(words.length);

//2.In the following shopping cart add, remove, edit items

//const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//add 'Meat' in the beginning of your shopping cart if it has not been already added
//add Sugar at the end of you shopping cart if it has not been already added
//remove 'Honey' if you are allergic to honey
//modify Tea to 'Green Tea'

let shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

console.log("unshift", shoppingCart.unshift("Meat"), shoppingCart);
console.log("concat", shoppingCart.push("Sugar"));
console.log("remove", shoppingCart);

let items = ["Milk", "Coffee", "Tea", "Honey", "Bread", "Meat"];

items.slice(0, 3); //['Milk', 'Coffee', 'Tea']
items.slice(4); //['Bread', 'Meat']
items = [...items.slice(0, 3), ...items.slice(4)];

function checkCountry() {
  if (countries.includes("Ethiopia")) {
    console.log(countries);
  } else {
    //console.log(...countries, "Ethiopia");
    console.log(countries.push("Ethiopia"));
    console.log(countries);
  }
}
console.log(checkCountry(countries));

//console.log(countries.includes("Ethiopia"));

//6.Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);

//Exercise: Level 3
//The following is an array of 10 students ages:

const ages5 = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
//Sort the array and find the min and max age
//Find the median age(one middle item or two middle items divided by two)
//Find the average age(all items divided by number of items)
//Find the range of the ages5(max minus min)
//Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array

console.log(ages5.sort());
//[19, 19, 20, 22, 24, 24, 24, 25, 25, 26]

//console.log(ages5[0], ages5[ages5.length - 1], ages5[ages5.length - 2]);
//console.log("middle", ages5[Math.ceil(ages5.length / 2 - 1)]);

function printTheMiddlenum(arr3) {
  let medianValue;
  if (arr3.length % 2 === 0) {
    let middleNum1 = ages5[Math.ceil(ages5.length / 2)];
    let middleNum2 = ages5[Math.ceil(ages5.length / 2 - 1)];
    medianValue = "median = " + (middleNum1 + middleNum2 / 2);
  } else {
    medianValue = ages5[Math.ceil(ages5.length / 2 - 1)];
  }
  return medianValue;
}
console.log(printTheMiddlenum(ages5));

//let averageResult = findAvr(arr4) / ages5.length;

function findAvr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let average = sum / arr.length;
  return average;
}

console.log(findAvr(ages5));

//let evenArr = [];
//let oddArr = [];

function countriesOddOrEven(arr5) {
  if (arr5.length % 2 === 0) {
    console.log("entered if loop");
    console.log("even", countries[arr5.length / 2]);
  } else {
    console.log("not found ....");
    console.log(countries.unshift("finland"));
    console.log(countries);
  }
}
countriesOddOrEven(countries);

const bigCountriesList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombi",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor Timur)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

//console.log(bigCountriesList);
let coutryAns = bigCountriesList[Math.ceil(bigCountriesList.length / 2 - 1)];
console.log(coutryAns);
