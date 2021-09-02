var express = require('express');

app = express();

app.get("/", function (req, res) {
    res.send("hello Express JS");
});

app.listen(8000, function () {
    console.log("server run successfully");
})