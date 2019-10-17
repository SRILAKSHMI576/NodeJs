const { MovieModel } = require("./schema/movieSchema");

const movie_resolver = function(req, res) {
  MovieModel.find({}, function(err, docs) {
    if (err) return err;
    res.send(docs);
  });
};

module.exports.movie_resolver = movie_resolver;
