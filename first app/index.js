var express = require('express');

app = express();

app.get("/", function (req, res) {
    res.send("This is HOME page");
});

app.post("/about", function (req, res) {
    res.send("This is ABOUT page");
});

app.put("/contact", function (req, res) {
    res.send("This is CONTACT page");
});

app.delete("/term", function (req, res) {
    res.send("This is TERM pageS");
});

app.listen(8000, function () {
    console.log("server run successfully");
})