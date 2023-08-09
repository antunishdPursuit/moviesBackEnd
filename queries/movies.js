const db = require("../db/dbConfig.js");

const getAllMovies = async() => {
  try {
    const allMovies = await db.any("SELECT *, To_Char(release_date,'YYYY-MM-DD') as release_date FROM movies");
    return allMovies; 
  } catch (error) {
    return error;
  }
};

const getMovie = async (id) => {
    try {
      const oneMovie = await db.one("SELECT *, To_Char(release_date,'YYYY-MM-DD') as release_date FROM movies WHERE id=$1", id);
      return oneMovie;
    } catch (err) {
      return err;
    }
  };
  
  const newMovie = async (movie) => {
    try {
      const newMovie = await db.one(
        "INSERT INTO movies ( title, director, genre, has_watched, rotten_tomato_score, release_date, runtime, poster ) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
        [ movie.title, movie.director, movie.genre, movie.has_watched, movie.rotten_tomato_score, movie.release_date, movie.runtime, movie.poster ]
      );
      return newMovie;
    } catch (err) {
      return err;
    }
  };
  
  const deleteMovie = async (id) => {
    try {
      const deletedMovie = await db.one(
        "DELETE FROM movies WHERE id = $1 RETURNING *",
        id
      );
      return deletedMovie;
    } catch (err) {
      return err;
    }
  };
  
  const updateMovie = async (id, movie) => {
    try {
      const updatedMovie = await db.one(
        "UPDATE movies SET title=$1, director=$2, genre=$3, has_watched=$4, rotten_tomato_score=$5, release_date=$6, runtime=$7, poster=$8 WHERE id =$9 RETURNING *",
        [movie.title, movie.director, movie.genre, movie.has_watched, movie.rotten_tomato_score, movie.release_date, movie.runtime, movie.poster, id]
      );
      return updatedMovie;
    } catch (err) {
      return err;
    }
  };
  module.exports = {
    getAllMovies,
    getMovie,
    newMovie,
    deleteMovie,
    updateMovie,
  };

