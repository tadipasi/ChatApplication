const express = require("express");
const app = express();
const server = require('http').Server(app);



server.listen(8000, function(){
        console.log("Server is running")
    });