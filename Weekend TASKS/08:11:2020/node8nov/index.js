const express = require("express");


const app = express();
const port = process.env.PORT || 3000;


app.use(express.json()); // json parser that is already with the express - it converts here request into json 


app.listen(port, () => {
    console.log(`Server is running successfully with port : ${port}`);
});


let users = [{
    id: 1,
    name: "Ayush",
    email: "ayushb147@outlook.com",
    contact: 9818982871
}];
app.get("/", (req, res) => {
    
    // console.log(res);
    // res.send({msg : "info"});

    res.status(200).json({
        message: "All users data",
        users
    }); // for success , sending json 
});
app.post("/add-user", (req, res) => {
    console.log("req.body",req.body);
    users.push(req.body);
    res.status(200).json({  // SETTING THE STATUS MANUALLY
        message: "Record added successfully",
        users
    });
});

app.get("/get-user/:id", (req, res) => {
    let result = users.find((data) => { //The find() method returns the value of the first element in an array that pass a test (provided as a function).
        return data.id == +req.params.id;
    });
    res.status(200).json({
        message: "Data Found",
        result,
    })

});

app.put("/get-user/:id", (req, res) => {
    let r1 = users.find((data) => {
        return data.id == +req.params.id;
    }) 
    r1.name = "NewAyush";
    res.status(200).json({
        message: "Data Updated",
        r1,
    })
});


app.delete("/get-user/:id", (req, res) => {
    let r2 = users.find((data) => {
        return data.id == +req.params.id;
    })
    delete r2.contact;
    res.status(200).json({
        message: "Data Updated",
        r2,
    })
});
// app.put();
// app.delete();