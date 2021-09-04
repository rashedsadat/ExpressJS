const express = require('express');

app = express();

app.post("/", function (req, res) {
    let firstName = req.header('firstName');
    let lastName = req.header('lastName');

    res.end(firstName+" "+lastName);
})

app.listen(8000, function () {
    console.log("surver run successfully");
});