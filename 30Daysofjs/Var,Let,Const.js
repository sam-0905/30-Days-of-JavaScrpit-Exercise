//!: Freecoding camp - For Refence: [ https://scrimba.com/scrim/coede4c58a4461640298cc925 ]

//NOTE: Var

var greeter = "hey hi"; // globally scoped.

//i) var can also be functional scope:

function myFunction() {
    var a = "hello";
    console.log(a); // it will works.
}

console.log(greeter); // we can call ,Bcz its globally declare.
console.log(a); //! Reference error : a is not defined.

//ii) var can be "ReDeclare" the value with the same variable name.

var d = "appu";
var d = "aneena";
d = "aneena"; // will give the same result.

console.log(d); //aneena