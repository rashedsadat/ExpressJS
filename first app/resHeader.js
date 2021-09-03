var express = require('express');

app = express();

app.get("/header", function (req, res) {
    res.header("name","rashed");
    res.append("age","30");
    res.status(201).end("hello Header!");
})

app.listen(8000, function () {
    console.log("server run successfully");
})