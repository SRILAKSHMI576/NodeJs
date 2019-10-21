const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: String,
  director: String,
  producer: String,
  price: Number,
  time: Number
});

const MovieModel = mongoose.model("Movie", movieSchema);

exports.MovieModel = MovieModel;
