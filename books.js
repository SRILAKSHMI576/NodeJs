const { BookModel } = require("./schema/bookSchema");

const book_resolver = function(req, res) {
  const searchQuery = {};
  BookModel.find(searchQuery, function(err, docs) {
    if (err) return err;
    res.send(docs);
  });
};

module.exports.book_resolver = book_resolver;
