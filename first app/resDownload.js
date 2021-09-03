var express = require('express');

app = express();

app.get("/downloads", function (req, res) {
    res.download("./uploads/pic.jpg");
});

app.listen(8000, function () {
    console.log("server run successfully");
});