// Write a
// function called“ addFive”.
// Given a number, “addFive” returns 5 added to that number.

var num = 10;

function addFive(n) {
    return n + 5;
}
var result = addFive(num)
console.log(result);



// Write a
// function called“ getOpposite”.
// Given a number,
// return its opposite

var num1 = 5;

function getOpposite(n) {
    if (n === 0)
        return 0;
    else if (Number.isInteger(n)) {
        return -n
    }
    else
        return -1;
}
var result1 = getOpposite(num1)
console.log(result1);



// Fill in your code that takes an number minutes and converts it to seconds.
var min = 5;

function toSeconds(m) {
    if (typeof (m) === "number") {
        return m * 60;
    }
}
var secs = toSeconds(min);
console.log(secs);



//Create a function that takes a string and returns it as an integer.
var mystr = "1000";

function toInteger(myst) {
    return +myst;
}
var myint = toInteger(mystr)
console.log(myint);



//Create a function that takes a number as an argument, increments the number by +1 and returns the result.
var myint = 0;

function nextNumber(my) {
    if (Number.isInteger(my)) {
        return my + 1;
}
}
var myNextint = nextNumber(myint)
console.log(myNextint);



//Create a function that takes an array and returns the first element.
var arr = [80, 5, 100];

function getFirstElement(ar) {
    return ar[0];
}
var data = getFirstElement(arr)
console.log(data);