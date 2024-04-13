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

var greeter1 = "hi";

if (true) {
    var greeter1 = "say hello instead";
}
//output > say hello instead - this greeter1 gets overwitten by above greeter1 value.