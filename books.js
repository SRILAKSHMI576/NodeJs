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
    price: book.price,
    time: Date.now()
  });
  msg
    .save()
    .then(doc => {
      res.status(201);
      res.send(doc);
    })
    .catch(err => {
      res.send(err);
    });
};

const updateBook = function(req, res) {
  const book_id = req.params.bookId;
  const book = req.body;
  const searchQuery = { _id: book_id };
  const updateBook = {
    name: book.name,
    author: book.author,
    price: book.price,
    updatedAt: Date.now()
  };
  BookModel.findOneAndUpdate(searchQuery, updateBook, {
    new: true
  })
    .then(doc => {
      res.send(doc);
    })
    .catch(err => {
      res.send(err);
    });
};

const deleteBook = function(req, res) {
  const movie_id = req.params.bookId;
  BookModel.findOneAndRemove({
    _id: movie_id
  })
    .then(doc => {
      res.status(204);
      res.send(doc);
    })
    .catch(err => {
      res.send(err);
    });
};
module.exports.book_resolver = book_resolver;
module.exports.getbooksById = getbooksById;
module.exports.insertBook = insertBook;
module.exports.updateBook = updateBook;
module.exports.deleteBook = deleteBook;
