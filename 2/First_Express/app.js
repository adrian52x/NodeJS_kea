// import express
const express = require("express");
const app = express();

//alternative
//const app = require("express")();

//endpoint and takes a callback function
app.get("/", (req,res) => {
    res.send({ message: "This is my response. Hello"});
});




app.listen(8080);  // leave at bottom

