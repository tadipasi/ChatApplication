const express = require("express");
const app = express();
const server = require('http').Server(app);

app.set("view engine", ejs);

app.get("/", function(req,res){
    res.send("home page")
});

app.get("/chatrooms",function(req,res){
    res.send
});

server.listen(8000, function(){
        console.log("Server is running")
    });