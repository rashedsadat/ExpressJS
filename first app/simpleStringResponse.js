var express = require('express');

app = express();

//send() -- response body
//end() -- end of the response
app.get("/rashed", function (req, res) {
    // res.send("This is Simple String Response by SEND method");
    res.end("This is Simple String Response by END method");
})

app.post("/sadat", function (req, res) {
    // res.send("This is Simple String Response by SEND method");
    res.end("This is Simple String Response by END method");
});

app.listen(8000, function () {
    console.log("server run successfully");
})