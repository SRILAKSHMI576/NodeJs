const express = require("express");
const books = require("./books");
const movies = require("./movies");
const songs = require("./songs");
const shortfilms = require("./short-films");
const serials = require("./serials");

const app = express();

//routing
app.get("/books", books.book_resolver);
app.get("/movies", movies.movie_resolver);
app.get("/songs", songs.songs_resolver);
app.get("/short-films", shortfilms.shortfilms_resolver);
app.get("/serials", serials.serials_resolver);

//start server on 3001
app.listen(3001, function() {
  console.log("Server started on port 3001.....");
});
