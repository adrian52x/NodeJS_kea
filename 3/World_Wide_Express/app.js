// import express
const express = require("express");
const app = express();



app.get("/weather", (req,res) => {
    res.sendFile(__dirname + "/public/weather.html");
});




const PORT = 8080;
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
})