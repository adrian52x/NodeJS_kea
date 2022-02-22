const express = require("express");
const app = express();

app.use(express.static("public"));

const fs = require("fs");

const head = fs.readFileSync("./public/components/head.html").toString();
const nav = fs.readFileSync("./public/components/nav.html").toString();

const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
const gallery = fs.readFileSync("./public/pages/gallery/gallery.html").toString();


const frontpagePage = head + nav + frontpage;
const galleryPage = head + nav + gallery;

app.get("/", (req,res) => {
    res.send(frontpagePage);
});

app.get("/gallery", (req,res) => {
    res.send(galleryPage);
});


app.listen(3000, () => {
    console.log("Server is running on port", 3000);
})