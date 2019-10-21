const mongoose = require("mongoose");

//Schema equivalent to mongodb objects
//(Header of the table)
const bookSchema = new mongoose.Schema({
  name: String,
  author: String,
  price: Number
});

//takes schema converts monogodb documents to relations records (row in a table)
const BookModel = mongoose.model("Book", bookSchema);

exports.BookModel = BookModel;
