import express from "express";
const app = express();

import cors from "cors";
app.use(cors());
app.use(express.json());

import moviesRouter from "./router/movies.js"


app.use(moviesRouter);




const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("Running server on port", PORT));