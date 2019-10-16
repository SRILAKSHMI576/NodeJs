const book_resolver = function(req, res) {
  var book_details = [
    { name: "js", author: "max" },
    { name: "react", author: "john snow" }
  ];
  res.send(book_details);
};

module.exports.book_resolver = book_resolver;
