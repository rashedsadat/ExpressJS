// npm install --save multer
const express = require('express');
const multer = require('multer');

app = express();

let storage = multer.diskStorage(
    {
        destination: function (req, file, callback) {
            callback(null, './uploads');
        },
        filename:function (req, file, callback) {
            callback(null, file.originalname);
        }
    }
);

let upload = multer({storage:storage}).single('myfile');

app.post("/", function (req, res) {
    upload(req, res, function (error) {
        if(error){
            res.send("File Upload ERROR");
        }
        else{
            res.send("File Upload SUCCESS");
        }
    })
});

app.listen(8000, function () {
    console.log("surver run successfully");
});