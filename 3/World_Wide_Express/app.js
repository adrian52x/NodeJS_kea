// import express
const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});

app.get("/weather", (req,res) => {
    res.sendFile(__dirname + "/public/weather.html");
});




const PORT = 8080;
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
})