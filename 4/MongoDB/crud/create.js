import db from "../createConnection.js";

db.actors.insertOne({ name: "Nicolas Cage", movies: ["Face Off", "The Rock", "Ghost rider"]});

