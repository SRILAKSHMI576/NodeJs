// imports
const express = require("express");
const movies = require("./movies");
const books = require("./books");
const songs = require("./songs");
const shortfilms = require("./short-films");
const serials = require("./serials");
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

app.get("/songs", songs.getAllSongs);
app.get("/songs/:songId", songs.getSongsById);
app.post("/songs", songs.insertSong);
app.put("/songs/:songId", songs.updateSong);

app.get("/short-films", shortfilms.shortfilms_resolver);
app.get("/short-films/:shortfilmId", shortfilms.getShortfilmById);

app.get("/serials", serials.serials_resolver);
app.get("/serials/:serialId", serials.getSerialById);
app.post("/serials", serials.insertSerial);

//start server on 3001
app.listen(3001, function() {
  console.log("Server started on port 3001.....");
});
