// import express
const express = require("express");
const app = express();


//alternative
//const app = require("express")();

app.use(express.json());


//endpoint and takes a callback function
app.get("/", (req, res) => {
    res.send({ message: "This is my response. Hello"});
});


app.post("/", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});


//this is not REST
//task create a GET route called about that sends some info about server
app.get("/about", (req,res) => {
    res.send({ version: "0.0.1",
               port: "8080"});
});

//task implement a POST request handler on the endpoint /opinion based on the client data
//the server sends a response that contains an opinion




app.listen(8080);  // leave at bottom


