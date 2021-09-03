var express = require('express');

app = express();

app.get("/cookies", function (req, res) {
    res.cookie("name","rashed");
    res.cookie("age","30");
    res.end("hello Cookies!");
})

app.get("/cookies_clear", function (req, res) {
    res.clearCookie("name");
    res.end("Cookies clear success!");
})

app.listen(8000, function () {
    console.log("server run successfully");
})