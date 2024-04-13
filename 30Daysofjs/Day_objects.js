//NOTE:
a = "appu";
b = 10;

function letsLearnScope() {
    console.log(a, b);
    if (true) {
        console.log(a, b);
    }
}
console.log(a, b); // accessible

//scope.js
let c = "JavaScript2"; // is a global scope it will be found anywhere in this file
let d = 15; // is a global scope it will be found anywhere in this file
function letsLearnScope() {
    console.log(c, d); // JavaScript 10, accessible
    if (true) {
        let c = "Python";
        let d = 100;
        console.log(c, d); // Python 100
    }
    console.log(c, d);
}
letsLearnScope();
console.log(c, d); // JavaScript 10, accessible