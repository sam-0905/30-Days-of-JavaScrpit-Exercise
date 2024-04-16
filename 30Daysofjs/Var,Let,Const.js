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

//iii) Hoisting in var
//var b ;
console.log(b); // we call before we declare the variable.
var b = 10;
//outpu > undefined - In this case Var is moving the declaration top of the program as we seen in the example and intialize it in the value of undefined.

//iv) Var In case of block scope
//HACK: var doesn't have  block scope.
//! It is one the bug incase of var.For that instead of var they use let.
var greeter1 = "hi";

if (true) {
    var greeter1 = "say hello instead";
}
//output > say hello instead - this greeter1 gets overwitten by above greeter1 value.

if (true) {
    var gravity = 9.81;
    console.log(gravity); // 9.81
}
console.log(gravity); // 9.81

for (var i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
}
console.log(i); // 3

//------------------------------------------------------------------------------------------------

//NOTE: let
//? It won't pollute the value outside the block.
let greeter2 = "hi";

if (true) {
    let hello = "say hello instead";
    console.log(hello); // say hello instead
}
console.log(greeter2); // hi
console.log(hello); //!It gives, Reference error : hello is not defined.

//output > like we seen above- this greeter2 dosen't overwitten by above greeter2 value.

//ii) let can also be "ReDeclare" the value with the same variable name.
let e = "appu";
e = "aneena"; // will give the same result.
//let e = "aneena"; //!  It gives, syntax error :  Identifier e is already declared.

console.log(e); //aneena

//iii) Hoisting in let
//let b ;
console.log(f); //!It gives, Reference error : cannot access befor intialization.
let f = 10;
//outpu > undefined - In this case Var is moving the declaration top of the program as we seen in the example and intialize it in the value of undefined.

//------------------------------------------------------------------------------------------------------

//NOTE: CONST
//i) In const "SRTICTLY" we cannot redelare a variable
const g = "appu";
//g = "aneena"; //!  It gives, Type error : Assignment to a constant variable
//const g = "aneena"; .//!  It gives, syntax error :  Identifier e is already declared.

console.log(g); //aneena

//ii)only way to change the value in const is
const h = {
    msg: "say hi",
    times: 4,
};
//To change the value
h.msg = "appu kutty";
console.log(h.msg); //say hi