const express = require('express');

app = express();

app.post("/", function (req, res) {
    res.send("this is simple post request");
})

app.listen(8000, function () {
    console.log("server run successfully");
})