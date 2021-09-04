const express = require('express');

app = express();

app.get("/", function (req, res) {
    res.end("this is SIMPLE get request");
})

app.listen(8000, function () {
    console.log("surver run successfully");
});