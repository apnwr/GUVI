// Write a
// function‘ transformFirstAndLast’ that takes in an array, and returns an object with:
//     1) the first element of the array as the object’ s key, and
// 2) the last element of the array as that key’ s value.
// Input(Array):
//     var array = [“GUVI”, “I”, “am”, “Geek”];
// Output:
//     var object = {
//         GUVI: “Geek”
//     }

var arr = ["GUVI", "I", "am", "a geek"];

function transformFirstAndLast(ar) {
    const newObject = {};
    newObject[arr[0]] = arr[arr.length - 1];
    return newObject;
}

console.log(transformFirstAndLast(arr));