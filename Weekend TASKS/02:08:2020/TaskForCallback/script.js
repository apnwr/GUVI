// Task for Callback

const fun = function () {
    console.log("I am a callback function & work after addition");
}
//using a,b for operation & callback as a callback function
function announce(a, b, callback) {
    let sum = a + b;
    console.log("The addition of " +a+ " & " +b+ " is " + sum); 
    callback();
}

// calling function & using fun as callback function
announce(2,3, fun);