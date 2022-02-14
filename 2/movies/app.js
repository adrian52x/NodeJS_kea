const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

// Array with movies
const movies = [
    { id: 1, title: 'Matrix', type: 'action' },
    { id: 2, title: 'Silent Hill', type: 'horror' } 
]


// GET main page
app.get('/', (req, res) => {
    res.json({"message": "Server is running, movies: "+ movies.length});
});

// GET all movies
app.get('/movies', (req, res) => {
    res.status(200).json(movies);
});

// GET movie by ID
app.get('/movies/:id', (req, res) => {
    // find an object from `data` array match by `id`
    let found = movies.find((movie) => {
        return movie.id === parseInt(req.params.id);
    });
    // if object found return an object else return 404 not-found
    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
});

// POST movie
app.post('/movie', (req, res) => {
    // get itemIds from data array
    let movieIds = movies.map(movie => movie.id);
   
    // create new id (basically +1 of last item object)
    let newId = movieIds.length > 0 ? Math.max.apply(Math, movieIds) + 1 : 1;
    
    // create an object of new Movie
    let newMovie = {
        id: newId, // generated in above step
        title: req.body.title, // value of `title` get from POST req
        type: req.body.type, // value of `type` get from POST req
        
    };

    movies.push(newMovie);

    res.status(201).json(newMovie);
});


// DELETE movie by ID
app.delete('/movie/:id',(req, res) => {
    // find item from array of data
    let found = movies.find((movie) => {
        return movie.id === parseInt(req.params.id);
    });

    if (found) {
        // if movie found then find index at which the movie is
        // stored in the `movies` array
        let targetIndex = movies.indexOf(found);

        // splice means delete item from `movies` array using index
        movies.splice(targetIndex, 1);
    }

    // return with status 204
    // success status response code 204 indicates
    // that the request has succeeded
    res.sendStatus(204);
});

















let PORT = 8080

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});