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
module.exports.book_resolver = book_resolver;
module.exports.getbooksById = getbooksById;
