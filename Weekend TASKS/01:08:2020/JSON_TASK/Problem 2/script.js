//Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.
// Example Input: {
//     name: ‘RajiniKanth’,
//     age: 25,
//     hasPets: true
// }
// Example Output: [‘name’, ‘age’, ‘hasPets’]

var object = {
    name: "RajiniKanth",
    age: 33,
    hasPets: false
};
function printAllKeys(obj) {
    console.log(Object.keys(obj));
}
printAllKeys(object);