const express = require("express");

const app = express();

const port = process.env.PORT || 3001;

app.use(express.json());

app.listen(port, () => {
    console.log(`Application is successfully running with the port :- ${port}`);
})

app.get("/", (req, res) => {
    res.send("Welcome to my new Hall Booking Page!");
})

var booking = []
var bookedData = [];
var halls = [{
        RoomId: 101,
        Seats: 150,
        Amenities: "AC, SeaView, Wifi, Screen",
        Price: 22000
    },
    {
        RoomId: 102,
        Seats: 180,
        Amenities: "AC, Wifi, Screen",
        Price: 19000
    },
    {
        RoomId: 103,
        Seats: 120,
        Amenities: "  Wifi, Screen",
        Price: 12000
    },
    {
        RoomId: 104,
        Seats: 120,
        Amenities: " Wifi, Screen",
        Price: 12000
    },
    {
        RoomId: 105,
        Seats: 150,
        Amenities: "AC, Wifi, Screen",
        Price: 18000
    },
    {
        RoomId: 106,
        Seats: 160,
        Amenities: " SeaView, Wifi, Screen",
        Price: 19000
    },
    {
        RoomId: 107,
        Seats: 125,
        Amenities: " Wifi, Screen",
        Price: 12000
    }
]

app.get("/get-data", (req, res) => {
    res.status(200).json({
        message: "All Available Rooms",
        halls,
    })
});

function removeEntries() {
    for (i = 0; i < booking.length; i++) {
        for (j = 0; j < halls.length; j++)
            var manipulate = halls[j];
        console.log(manipulate);
        if (booking[i].RoomId == halls[j].RoomId) {
            setTimeout(function () {
                halls.splice(j, 0, manipulate);
            }, 60000)

            halls.splice(j, 1);

        }
    }
}

app.post("/book-hall", (req, res) => {
    console.log("req.body", req.body);
    booking.push(req.body);
    res.status(200).json({
        message: "booking successfull! ",
        booking
    })
    removeEntries();

})