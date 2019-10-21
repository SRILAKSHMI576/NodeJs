const { BookModel } = require("./schema/bookSchema");

const book_resolver = function(req, res) {
  BookModel.find()
    .then(doc => {
      res.send(doc);
    })
    .catch(err => {
      res.send(err);
    });
};

const getBookById = function(req, res) {
  //const params = req.params; //object
  const book_id = req.params.bookId;
  BookModel.find({ _id: book_id })
    .then(doc => {
      res.send(doc[0]);
    })
    .catch(err => {
      res.send(err);
    });
};

const insertBook = function(req, res) {
  const bookDetails = req.body;
  let msg = new BookModel({
    name: bookDetails.name,
    director: bookDetails.author,
    price: bookDetails.price,
    time: Date.now()
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
module.exports.getBookById = getBookById;
module.exports.insertBook = insertBook;
