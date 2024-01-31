/*
1.Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
2.Print the string on the browser console using console.log()
3.Print the length of the string on the browser console using console.log()
4.Change all the string characters to capital letters using toUpperCase() method
5.Change all the string characters to lowercase letters using toLowerCase() method
6.Cut (slice) out the first word of the string using substr() or substring() method
7.Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
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
console.log(cutName.substr(0, 1));

// substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.
let country = "finland";
console.log(country.substring(1));
console.log(country.substring(5, 0));

var phrase = "30 Days Of JavaScript";
console.log(phrase.substr(2));

/*
8.Check if the string contains a word Script using includes() method.
9.Split the string into an array using split() method
10.Split the string 30 Days Of JavaScript at the space using split() method
11.'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
12.Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
13.What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
14.What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
15.Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
16.Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
17.see indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
18.Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
**/
var checkWord = "JavaScrpit is the fundamental";
console.log(checkWord.includes("JavaScrpit"));
console.log(checkWord.includes("fundamental"));
console.log(checkWord.includes("java"));

//The split method splits a string at a specified place.

var checkWord2 = "JavaScrpit is the fundamental";
console.log(checkWord2.split());
console.log(checkWord2.split(""));
var myName = "allansam";
console.log(myName.split(""));

const companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(","));

const replaceWord = "30 Days Of JavaScript";
console.log(replaceWord);
console.log(replaceWord.replace("JavaScript", "Python"));

//charAt(): Takes index and it returns the value at that index
//charCodeAt(): Takes index and it returns char code (ASCII number) of the value at that index
const string = "30 Days Of JavaScript";
console.log(string.charAt(15));
console.log(string.charCodeAt("11"));
console.log(string.charCodeAt("3"));
console.log(string.indexOf("J"));

let lastIndex = string.length - 1;
console.log(string.charCodeAt(lastIndex)); // t ASCII is 116

/*
Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
Use startsWith() method with the string 30 Days Of JavaScript and make the result true
Use endsWith() method with the string 30 Days Of JavaScript and make the result true
Use match() method to find all the a’s in 30 Days Of JavaScript
Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
Use repeat() method to print 30 Days Of JavaScript 2 times
**/

let string1 = "   30 Days Of JavaScript   ";
console.log(string1);
console.log(string1.trim(" "));

let string2 = "Love is the best to in this world";
console.log(string2.startsWith("Love")); // true
console.log(string2.startsWith("love")); // false

let country_2 = "Finland";
console.log(country_2.endsWith("land")); // true
console.log(country_2.endsWith("fin")); // false

let country_1 = "Fin";
console.log(country_1.concat("land")); // Finland

let string_3 = "love";
console.log(string_3.repeat(10)); // lovelovelovelovelovelovelovelovelovelove

let country_3 = "Fin";
console.log(country_3.concat("land")); // Finland
