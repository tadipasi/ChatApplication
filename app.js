const express = require("express");
const app = express();
const server = require('http').Server(app);
const mongoose = require("mongoose");


//Connect to database
mongoose.connect('mongodb+srv://tadipasi:barcelona@cluster0-81zn9.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to database!');
}).catch(err => {
    console.log('ERROR:', err.message);
});



app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.send("home page")
});

app.get("/chatrooms",function(req,res){
    res.send("chatrooms")
});

server.listen(8000, function(){
        console.log("Server is running")
    });