// imports
const express = require("express");
const movies = require("./movies");
const books = require("./books");
const songs = require("./songs");
const shortfilms = require("./shortfilms");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");

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
app.use(bodyParser.json());

//routing
//api

app.get("/movies", movies.movie_resolver);
app.get("/movies/:movieId", movies.getMoviesById);
app.post("/movies", movies.insertMovie);
app.put("/movies/:movieId", movies.updateMovie);
app.delete("/movies/:movieId", movies.deleteMovie);

app.get("/books", books.book_resolver);
app.get("/books/:bookId", books.getbooksById);
app.post("/books", books.insertBook);
app.put("/books/:bookId", books.updateBook);
app.delete("/books/:bookId", books.deleteBook);

app.get("/songs", songs.getAllSongs);
app.get("/songs/:songId", songs.getSongsById);
app.post("/songs", songs.insertSong);
app.put("/songs/:songId", songs.updateSong);
app.delete("/songs/:songId", songs.deleteSong);

app.get("/shortfilms", shortfilms.shortfilms_Resolver);
app.get("/shortfilms/:shortfilmId", shortfilms.getShortfilmById);
app.post("/shortfilms", shortfilms.insertShortfilm);
app.put("/shortfilms/:shortfilmId", shortfilms.updateShortfilm);
app.delete("/shortfilms/:shortfilmId", shortfilms.deleteShortfilm);

//start server on 3001
app.listen(3001, function() {
  console.log("Server started on port 3001.....");
});
