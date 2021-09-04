const express = require('express');

app = express();

app.post("/", function (req, res) {
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;

    res.send(firstName+" "+lastName);
})

app.listen(8000, function () {
    console.log("surver run successfully");
});