const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: String,
  author: String,
  price: Number
});

const BookModel = mongoose.model("Book", bookSchema);

exports.BookModel = BookModel;
