const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: String,
  director: String,
  producer: String,
  price: Number
});

const BookModel = mongoose.model("Movie", movieSchema);

exports.BookModel = BookModel;
