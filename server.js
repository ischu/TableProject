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

app.get("/", function(res, req) {
    res.sendFile(path.join(_dirname, "index.html"))
});

app.get("/tables", function(res, req) {
    res.sendFile(path.join(_dirname, "tables.html"))
});

app.get("/reservation", function(res, req) {
    res.sendFile(path.join(_dirname, "reservations.html"))
});

app.get("/api/tables", function(res, req) {
    return res.json(tables)
});

app.get("/api/reservations", function(res, req) {
    return res.json(reservations)
});

// app.post("/api/tables", function(res, req) {

// })