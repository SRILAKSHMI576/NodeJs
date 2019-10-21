const { MovieModel } = require("./schema/movieSchema");

const movie_resolver = function(req, res) {
  MovieModel.find({}, function(err, docs) {
    if (err) return err;
    res.send(docs);
  });
};

const getMoviesById = function(req, res) {
  const params = req.params;
  const movie_id = params.movieId;
  MovieModel.find({ _id: movie_id }, function(err, docs) {
    if (err) return err;
    res.send(docs[0]);
  });
};

module.exports.movie_resolver = movie_resolver;
module.exports.getMoviesById = getMoviesById;
9;
