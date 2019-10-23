const { MovieModel } = require("./schema/movieSchema");

const movie_resolver = function(req, res) {
  const searchQuery = {};
  MovieModel.find(searchQuery, function(err, docs) {
    if (err) return err;
    res.send(docs);
  });
};

const getMoviesById = function(req, res) {
  const params = req.params;
  const movie_id = params.movieId;
  const searchQuery = { _id: movie_id };
  MovieModel.find(searchQuery, function(err, docs) {
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

const updateMovie = function(req, res) {
  const movieId = req.params.movieId;
  const movie = req.body;
  const searchQuery = {
    _id: movieId // search query
  };
  const updateMovie = {
    name: movie.name,
    director: movie.director,
    producer: movie.producer,
    price: movie.price,
    updatedAt: Date.now()
    // field:values to update
  };
  MovieModel.findOneAndUpdate(searchQuery, updateMovie, {
    new: true // return updated doc
  })
    .then(doc => {
      res.send(doc);
    })
    .catch(err => {
      res.send(err);
    });
};
const deleteMovie = function(req, res) {
  const movieId = req.params.movieId;
  MovieModel.findOneAndRemove({
    _id: movieId
  })
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.send(err);
    });
};
module.exports.movie_resolver = movie_resolver;
module.exports.getMoviesById = getMoviesById;
module.exports.insertMovie = insertMovie;
module.exports.updateMovie = updateMovie;
module.exports.deleteMovie = deleteMovie;
