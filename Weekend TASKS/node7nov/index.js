const fs = require('fs');
const express = require('express');

const app = express();
const port = 3001;

// object for new date
const date = new Date().toUTCString();
var data = "Current timestamp  : " + date;

// creating directory
fs.mkdir('Date', {
    recursive: true
}, (err) => {
    if (err) throw err;
});
// writing to the created directory
fs.writeFile('Date/date-time.txt', data, (err) => {
    console.log("File has been created");
})
// listening to the port :3001
app.listen(port, () => {
    console.log("Application is running successfully with port : " + port);
})

// sending response to root route
app.get('/', (req, res) => {
    const head = "Welcome to my server with port " + port;
    res.send(head);
})

