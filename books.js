const { BookModel } = require("./schema/bookSchema");

const book_resolver = function(req, res) {
  BookModel.find({}, function(err, docs) {
    if (err) return err;
    res.send(docs);
  });
};

const getBookResolver = function(req, res) {
  const params = req.params; //object
  const book_id = params.bookId;
  BookModel.find({ _id: book_id }, function(err, docs) {
    if (err) return err;
    res.send(docs[0]);
  });
};
module.exports.book_resolver = book_resolver;
module.exports.getBookResolver = getBookResolver;
