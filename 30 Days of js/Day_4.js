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
console.log(webTechs.slice(2));

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
}

var name = "allan";
console.log(name.toUpperCase());

console.log(printEachItemInAnArray(companies));

function printEachItemInAnArray2(arr2) {
  for (let i = 0; i < arr2.length; i++) {
    var elements = arr2[i].toUpperCase();
    console.log(elements);
  }
}

console.log(printEachItemInAnArray2(companies));

const sentence = [
  "Oracle and Amazon are big IT companies,Facebook, Google, Microsoft, Apple, IBM.",
];
sentence.sort();
console.log(sentence);
