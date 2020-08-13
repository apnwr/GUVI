// Parsing a list of lists and convert into a JSON object:
//     Write a
// function called“ transformGeekData” that transforms some set of data from one format to another.
// Input(Array):
//     var array = [
//         [
//             [“firstName”, “Vasanth”],
//             [“lastName”, “Raja”],
//             [“age”, 24],
//             [“role”, “JSWizard”]
//         ],
//         [
//             [“firstName”, “Sri”],
//             [“lastName”, “Devi”],
//             [“age”, 28],
//             [“role”, “Coder”]
//         ]
//     ];
// Output: [{
//         firstName: “Vasanth”,
//         lastName: “Raja”,
//         age: 24,
//         role: “JSWizard”
//     },
//     {
//         firstName: “Sri”,
//         lastName: “Devi”,
//         age: 28,
//         role: “Coder”
//     }
// ]

    var array = [
        [
            ["firstName", "Vasanth"],
            ["lastName", "Raja"],
            ["age", 24],
            ["role", "JSWizard"]
        ],
        [
            ["firstName", "Sri"],
            ["lastName", "Devi"],
            ["age", 28],
            ["role", "Coder"]
        ]
    ];

function transformGeekData(ar) {
    let arr = [];
    for (i = 0; i < ar.length; i++) {
        // converting inner array to key-value pair
        const obj = Object.fromEntries(ar[i]);
        // pushing each json to array 
        arr.push(obj);
    }
    console.log(arr);
}
transformGeekData(array);