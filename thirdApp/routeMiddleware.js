const express = require('express');

var app = express();

app.use("/about",function (req, res, next) {
    console.log("I am a About MIddleware!");
    next();
});

app.get("/", function (req, res) {
    res.send("HOME page");
});

app.get("/about", function (req, res) {
    res.send("ABOUT page");
});

app.get("/contact", function (req, res) {
    res.send("CONTACT page");
});

app.listen(5000, function () {
    console.log("Surver run Successfully!");
})