var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [
    {
        name: "Hank Hill",
        phoneNumber: "8888888888",
        customerEmail: "propane@gmail.com",
        customerID: "pr0pan3"
    },
    {
        name: "Cotton Hill",
        phoneNumber: "7777777777",
        customerEmail: "cotthill@live.com",
        customerID: "hill69"
    },
    {
        name: "Peggy Hill",
        phoneNumber: "6666666666",
        customerEmail: "teacher1@yahoo.com",
        customerID: "bobby123"
    }
]

var reservations = [
    {
        name: "",
        phoneNumber: "",
        customerEmail: "",
        cutomerID: ""
    }
]

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"))
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"))
});

app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"))
});

app.get("/api/tables", function(req, res) {
    return res.json(tables)
});

app.get("/api/reservations", function(req, res) {
    return res.json(reservations)
});

app.post("/api/tables", function(req, res) {
    var newTable = req.body;

    newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();

    console.log(newTable);
    
    for (var i = 0; i < tables.length; i++) {
        if(i < 5) {
            tables.push(newTable)
        }
        else if(i === 5) {
            reservations.push(newTable)
        }
    }

});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});