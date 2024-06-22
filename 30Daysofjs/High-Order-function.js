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

const numbers = [1, 2, 3, 4]​
const sumArray = arr => {
    let sum = 0
    arr.forEach(function(element) {
        sum += element
    })
    return sum
}
console.log(sumArray(numbers))

//? setInterval
//The setInterval global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback will be always called in that interval of time.

// syntax
function callback() {
    // code goes here
}
setInterval(callback, duration)

function sayHello() {
    console.log('Hello')
}
//setInterval(sayHello, 1000) // it prints hello in every second, 1000ms is 1s

//?Setting a time using a setTimeout
function sayHello() {
    console.log('Hello')
}
setTimeout(sayHello, 2000) // it prints hello after it waits for 2 seconds.