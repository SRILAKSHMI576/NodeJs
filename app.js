// imports
const express = require("express");
const books = require("./books");
const movies = require("./movies");
const songs = require("./songs");
const shortfilms = require("./short-films");
const serials = require("./serials");
const mongoose = require("mongoose");

//connection to mongodb
const mongodb_server = "127.0.0.1:27017";
const database_name = "Entertainment";
mongoose
  .connect(`mongodb://${mongodb_server}/${database_name}`)
  .then(() => {
    console.log("Database connection successful");
  })
  .catch(err => {
    console.error("Database connection error");
  });

const app = express();

//routing
//api
app.get("/books", books.book_resolver);

app.get("/movies", movies.movie_resolver);
app.get("/songs", songs.getAllSongs);
app.get("/short-films", shortfilms.shortfilms_resolver);
app.get("/serials", serials.serials_resolver);

app.get("/books/:bookId", books.getBookResolver);
app.get("/songs/:songId", songs.getSongsById);
app.get("/movies/:movieId", movies.getMovieResolver);
//start server on 3001
app.listen(3001, function() {
  console.log("Server started on port 3001.....");
});
