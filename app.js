const express = require("express");
const app = express();
const server = require('http').Server(app);
const mongoose = require("mongoose");
const Lobby = require("./models/lobby");
const bodyParser = require("body-parser");


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


app.use(bodyParser.urlEncoded({extended:true}));
app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.send("home page")
});

app.get("/lobby",function(req,res){
    res.send("lobby")
});

server.listen(8000, function(){
        console.log("Server is running")
    });