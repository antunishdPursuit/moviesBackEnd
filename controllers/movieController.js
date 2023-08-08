const express = require("express");
const movies = express.Router();
const {
    getAllMovies,
    getMovie,
    newMovie,
    deleteMovie,
    updateMovie,
  } = require("../queries/movies");
  
  const {
    checkBoolean,
    checkTitle,
    checkDirector,
  } = require("../validations/checkMovies.js");


//index
movies.get("/", async  (req, res) => {
    const allMovies = await getAllMovies();
    if (allMovies[0]) {
        res.status(200).json(allMovies);
    } else {
        res.status(500).json({ error: "server error" });
    }
});

// // SHOW
movies.get("/:id", async (req, res) => {
    const { id } = req.params;
    const movie = await getMovie(id);
    if (movie.runtime) {
      res.json(movie);
    } else {
      res.status(404).json({ error: "not found" });
    }
  });
  
  // CREATE AND POSTS IT TO ALL MOVIES
  movies.post("/", checkBoolean, checkTitle, checkDirector, async (req, res) => {
    try {
      const movie = await newMovie(req.body);
      res.json(movie);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  });
  
  // UPDATE THE ID OF THE MOVIE
  movies.put("/:id", checkBoolean, checkTitle, checkDirector, async (req, res) => {
    const { id } = req.params;
    const updatedMovie = await updateMovie(id, req.body);
    res.status(200).json(updatedMovie);
  });
  
  // {
  //   id= " ", 
//     name=" ",
//     title=" ", 
//     director=" ", 
//     genre=" ", 
//     has_watched=" ",
//     rotten_tomato_score=" ",
//     runtime= " "
  // }
  
  // DELETE
  movies.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedMovie = await deleteMovie(id);
    if (deletedMovie.id) {
      res.status(200).json(deletedMovie);
    } else {
      res.status(404).json("Movie not found");
    }
  });
  

module.exports = movies 