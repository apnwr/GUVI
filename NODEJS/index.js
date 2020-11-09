const os = require('os'); // requiring the package which will be used - defining os
const fs = require('fs');

const express = require('express');
const app = express();

app.listen(3000, () => console.log("Application is running successfully on port 3000"));

app.get('/home', function (req, res) {
    res.send("Welcome to my file system"); 
});

app.get('/list', function (req, res) {
    const tst = '/Users/ayushpanwar/Desktop/';
    fs.readdir(tst, 'utf-8', (err, files) => {
        if (err) throw err;
        console.log('reading folders!');
        let rslt = "";
        let ico = '<img src="fileIcon.png">';
        files.forEach(file => {
            console.log(file);
            rslt += '<div>' + ico + file + '</div>'
           + '<br>';
        })
        res.send(rslt);
    })
    
})





// const { add, sub } = require('./my-custom-package/add.js');

// console.log(os.platform());

// console.log(os.release());


// //using fs package with readFile function
// //fs.readFile(path[, options], callback)
// fs.readFile('/Users/ayushpanwar/Desktop/NODEJS/ref.txt', 'utf-8', // giving the encoding - otherwise only buffer will be read 
//     (err, data) => { // callback - err first as node follows the error first callback flow
//         if (err) throw err;
//         console.log(data);
//     });


// //fs.writeFile(file, data[, options], callback)
// let info = "let's see how far we can go with the practice";
// fs.writeFile('message.txt', info, (err) => {
//     if (err) throw err;
//     console.log('File has been written');
// });

// console.log(process);

// let result = add(4, 5);
// console.log(result);

// let result1 = sub(15, 5);
// console.log(result1);

// const tst = '/Users/ayushpanwar/Desktop/';
// fs.readdir(tst, 'utf-8', // giving the encoding - otherwise only buffer will be read 
//     (err, files) => { // callback - err first as node follows the error first callback flow
//         if(err) throw err;
//         files.forEach(file => {
//             console.log(file);
//         });
        
//     });
