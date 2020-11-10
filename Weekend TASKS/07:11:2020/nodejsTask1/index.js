
const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

const port = 3000;
const dir = '/Users/ayushpanwar/Desktop/';

// listening to the port : 3000
app.listen(port, () => console.log("Application is running successfully on port 3000"));

// sending response to home route
app.get('/home', function (req, res) {
    res.send("Welcome to my file system");
});

// reading directories and files present on desktop and granting icon accordingly
app.get('/list', function (req, res) {
    fs.readdir(dir, 'utf-8', (err, files) => {
        if (err) throw err;
        // fs.readFile(path.join(__dirname, "Icons/fileIcon.png"), (er, file) => {
            console.log('reading folders!');
            let rslt = "<ol>";
        let ico = '';
        
        // let format = path.extname(file);
        // if(format.toLowerCase() == ".png"){}
            files.forEach(file => {
                console.log(file);
                let format = path.extname(dir + file);
                if (format == ".png" || format == ".jpg") {                    
                    ico = '<img src = "Icons/fileIcon.png">';
                } else {
                    ico = '<img src = "Icons/Folder-icon.png">';
                }
                rslt += '<li>' + ico + file + '</li> <br>';
            })
        rslt += '</ol>';
            res.send("<h1> Desktop List </h1> <br>" + rslt);
        // })
    })

})
// image has been used with static to remove the issue of corrupted or binary data
app.use("/Icons", express.static(path.join(__dirname, "Icons")));