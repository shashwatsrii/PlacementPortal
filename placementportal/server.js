// jshint esversion:6

const express = require("express");
const upload = require("express-fileupload");

const app = express();

app.get("/", function(req ,res){
    res.sendFile(path.join(__dirname + "src\App.js"));
});


app.listen(3000, function(){
    console.log("Server has started on Port 3000");
});



