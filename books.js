const { BookModel } = require("./schema/bookSchema");

const book_resolver = function(req, res) {
  const searchQuery = {};
  BookModel.find(searchQuery, function(err, docs) {
    if (err) return err;
    res.send(docs);
  });
};

const getbooksById = function(req, res) {
  const book_id = req.params.bookId;
  const searchQuery = { _id: book_id };
  BookModel.find(searchQuery, function(err, docs) {
    if (err) return err;
    res.send(docs);
  });
};

const insertBook = function(req, res) {
  const book = req.body;
  let msg = new BookModel({
    name: book.name,
    author: book.author,
    price: book.price
  });
  msg
    .save()
    .then(doc => {
      res.send(doc);
    })
    .catch(err => {
      res.send(err);
    });
};
module.exports.book_resolver = book_resolver;
module.exports.getbooksById = getbooksById;
module.exports.insertBook = insertBook;
