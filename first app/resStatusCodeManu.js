var express = require('express');

app = express();

app.get("/rashed", function (req, res) {
    res.status(401).end("Unauth.........");
})

app.listen(8000, function () {
    console.log("server run successfully");
})