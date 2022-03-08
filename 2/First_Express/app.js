// import express
const express = require("express");
const app = express();


//alternative
//const app = require("express")();

app.use(express.json());


// Array with movies
const movies = [
    { id: 1, title: 'Matrix', type: 'action' },
    { id: 2, title: 'Silent Hill', type: 'horror' } 
]


//endpoint and takes a callback function
app.get("/", (req, res) => {
    res.send(frontpage);
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


// Querry string
//http://localhost:8080/libraries?book1=aaaa&book2=bbbbb
app.get("/libraries", (req,res) => {
    res.send({});
});

// PathVariable
app.get("/aboutclient/:clientName", (req,res) => {
    res.send({ greeting: `Hello there ${req.params.clientName}`});
});


//GET by id
app.get("/movies/:id", (req,res) => {
    const foundMovie = movies.find(movie => movie.id === Number(req.params.id));
    foundMovie ? res.send({ data: foundMovie }) : res.status(404).send({error: "not found"});
})

//DELETE by Id
app.delete("/movies/:id", (req,res) => {
    const foundMovieIndex = movies.findIndex(movie => movie.id === Number(req.param.id));

    if(foundMovieIndex !== -1){
        movies.splice(foundMovieIndex, 1);
        res.send({})
    } else {
        res.status(404).send({});
    }
})
// ------------------------------------------------------
// 01/03/2022


const animalsUtils = require("./animals/animalsUtils.js");
console.log(animalsUtils);

console.log("Nr of animals ", animalsUtils.calculating());
console.log("My name is", animalsUtils.myName());


const animalsRouter = require("./routers/animalsrouter.js")
app.use(animalsRouter);

// ------------------------------------------------------
// 08/03/2022

app.use(express.static(__dirname + "/public/"));

const fs = require("fs");

const frontpage = fs.readFileSync("./public/frontpage.html").toString();
// ------------------------------------------------------
/* Assignment 
    use node-fetch
    create a route with the endpoint /proxy
    fetch google's homepage
    use res.text() to parse the response
    and display it to the client who requests /proxy

    bonus: use aasync/await to make it look nicer
*/

const fetch = require("node-fetch")

app.get("/proxy", (req,res) => {
    fetch("https://www.google.com")
    .then(response => response.text())
    .then(result => {
        res.send(result)
    })
});

app.get("/proxy2", async (req,res) => {
    const response = await fetch("https://www.google.com")
    const website = await response.text();
    res.send(website);


});





// ------------------------------------------------------
const PORT = process.env.PORT || 9090;


const server = app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT} `, server.address().port);
});


