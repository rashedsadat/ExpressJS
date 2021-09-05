// npm install --save multer
const express = require('express');
const multer = require('multer');

var multerInstance = multer();
app = express();

app.use(multerInstance.array());
app.use(express.static('public'));

app.post("/", function (req, res) {
    let jsonData = req.body;
    res.send(JSON.stringify(jsonData));
})

app.listen(8000, function () {
    console.log("surver run successfully");
});