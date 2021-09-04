const express = require('express');
const bodyParser = require('body-parser');

app = express();
app.use(bodyParser.json());

app.post("/", function (req, res) {
    let JSONData = req.body;
    // let jsonString = JSON.stringify(JSONData);
    let name = JSONData['name'];

    res.send(name);
})

app.listen(8000, function () {
    console.log("surver run successfully");
});