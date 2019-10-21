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

const insertMovie = function(req, res) {
  //Get movie from body
  const movie = req.body;
  //Map body details with movies schema because mongoose is middler
  let msg = new MovieModel({
    name: movie.name,
    director: movie.Director,
    producer: movie.producer,
    price: movie.price,
    time: Date.now()
  });

  msg
    .save() //save in database
    .then(doc => {
      //here doc is the saved doc in db
      //send response to client
      res.send(doc);
    })
    .catch(err => {
      //if any error in saving database then send an error to client
      res.send(err);
    });
};

module.exports.movie_resolver = movie_resolver;
module.exports.getMoviesById = getMoviesById;
module.exports.insertMovie = insertMovie;
