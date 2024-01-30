import "./styles.css";
/*Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
Print the string on the browser console using console.log()
Print the length of the string on the browser console using console.log()
Change all the string characters to capital letters using toUpperCase() method
Change all the string characters to lowercase letters using toLowerCase() method
Cut (slice) out the first word of the string using substr() or substring() method
Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
*/

var challanged = "30 Days Of JavaScript";
console.log(challanged);

var str = "string";
console.log(str);
console.log(str.length);

var name = "appu kutty";
console.log(name);
console.log(name.toUpperCase());

var name2 = "APPU KUTTY";
console.log(name2);
console.log(name2.toLowerCase());

//substr(): It takes two arguments, the starting index and number of characters to slice.
var cutName = "slice";
console.log(cutName.substr(1));
console.log(cutName.substr(4, 0));

// substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.
let country = "finland";
console.log(country.substring(1));
console.log(country.substring(5, 0));

var phrase = "30 Days Of JavaScript";
console.log(phrase.substr(2));

/*
Check if the string contains a word Script using includes() method
Split the string into an array using split() method
Split the string 30 Days Of JavaScript at the space using split() method
'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
**/
var checkWord = "JavaScrpit is the fundamental";
console.log(checkWord.includes("JavaScrpit"));
console.log(checkWord.includes("fundamental"));
console.log(checkWord.includes("java"));

/*
appu
**/
document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>`;
