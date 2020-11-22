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

let rooms = [];


// Getting the data of all the information of all the rooms
app.get("/get-data", (req, res) => {
    try {
        res.status(200).json({
            message: "All Available Rooms",
            rooms,
        })
    } catch (err) {
        console.log(err);
        res.status(500);
    }

});

// Getting the list of available rooms
app.get("/rooms-available", (req, res) => {
    try {
        let Ravailable = []
        for (let i = 0; i < rooms.length; i++) {
            let BID = rooms[i].room_name;
            Ravailable.push(BID);
        }
        res.status(200).json({
            message: "Available Rooms",
            Ravailable
        })
    } catch (err) {
        console.log(err);
        res.send(500);
    }
})


// Getting the info related to booked rooms
app.get("/booked-data", (req, res) => {
    let booked = [];

    for (let i = 0; i < rooms.length; i++) {
        let b_room = {};
        if (rooms[i].booking_info.length != 0) {
            b_room.RoomName = rooms[i].room_name;
            b_room.bookedStatus = rooms[i].bookedStatus;
            b_room.customerInfo = rooms[i].booking_info;

            booked.push(b_room);
        }
    }
    res.status(200).json({
        message: "All Booked Rooms",
        booked

    })

})


// Getting the info related to customers who booked the rooms
app.get("/booked-Customers", (req, res) => {
    let bCust = [];
    for (let i = 0; i < rooms.length; i++) {
        let Custb = {};
        if (rooms[i].booking_info.length != 0) {
            Custb.CustomerInfo = rooms[i].booking_info;
            Custb.RoomName = rooms[i].room_name;
            bCust.push(Custb);
        }
    }
    res.status(200).json({
        message: "All Customer Bookings!",
        bCust

    })

})





// Creating rooms
app.post("/create-rooms", (req, res) => {
    try {
        console.log("Request.body : " + JSON.stringify(req.body));

        let feed = {};
        feed.room_id = rooms.length + 1 + "A";
        feed.room_name = rooms.length + 1000;
        feed.amenities = req.body.amenities;
        feed.price = req.body.price;
        feed.seatsAvailable = req.body.seatsAvailable;
        feed.bookedStatus = "Vacant";
        feed.booking_info = [];

        rooms.push(feed);
        res.status(200).json({
            message: "Room Created! ",
        })

    } catch (err) {
        console.log(err);
        res.send(500);
    }

})


// Booking Rooms with Room number as param
app.post("/book-rooms/:id", (req, res) => {
    try {
        let customer = {};
        for (let i = 0; i < rooms.length; i++) {
            if (rooms[i].room_name == req.params.id) {
                if (rooms[i].booking_info.length === 0) {
                   var cu =  roomBooking(req, res, i);
                    res.status(200).json({
                        message: "Your Room is booked",
                        cu
                    })
                } else {
                    res.status(200).json({
                        message: "This Room is already booked"

                    })
                }

            } 
        }

    } catch (error) {
        console.log(error);
        res.send(500);
    }
})




// Function to set info while booking the rooms and updating the booking status
function roomBooking(req, res,i) {
    let sdt = new Date(req.body.year, req.body.month, req.body.day, 0, 0, 0);
    sdt.setHours(req.body.BookingStartHours, req.body.BookingStartMinutes)
    let endt = new Date(req.body.year, req.body.month, req.body.day);
    endt.setHours(req.body.BookingEndHours, req.body.BookingEndMinutes)
    customer = {
        Customer_Name: req.body.customerName,
        RoomName: rooms[i].room_name,
        BookingDate: sdt.getDate() + "-" + sdt.getMonth() + "-" + sdt.getFullYear(),
        startTime: sdt.getHours() + ":" + sdt.getMinutes(),
        endTime: endt.getHours() + ":" + endt.getMinutes()
    }
    rooms[i].booking_info.push(customer);
    rooms[i].bookedStatus = "Booked";
    return customer;
}