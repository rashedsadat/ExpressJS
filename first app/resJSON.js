var express = require('express');

app = express();

app.get("/json", function (req, res) {
    var myJsonArray = [
        {
            name : "rashed",
            city : "noakhali",
            occupation : "engineer"
        },
        {
            name : "sadat",
            city : "dhaka",
            occupation : "engineer"
        }
    ];
    res.json(myJsonArray);
});

app.listen(8000, function () {
    console.log("server run successfully");
});