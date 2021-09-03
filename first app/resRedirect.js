var express = require('express');

app = express();

app.get("/bangladesh", function (req, res) {
    res.redirect("http://localhost:8000/india");
})

app.get("/india", function (req, res) {
    // res.send("This is India");
    res.download("./uploads/pic.jpg");
})

app.listen(8000, function () {
    console.log("server run successfully");
})