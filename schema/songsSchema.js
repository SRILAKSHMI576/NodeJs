const mongoose = require("mongoose");

const songs_Schema = new mongoose.Schema({
  movie_name: String,
  song_name: String,
  movie_year: Number,
  price: Number
});

const Songs_Model = mongoose.model("Songs", songs_Schema);

exports.Song_Model = Songs_Model;
