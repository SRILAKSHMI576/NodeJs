const { Songs_Model } = require("./schema/songsSchema");

//Get all songs in mongodb
const getAllSongs = function(req, res) {
  console.log(req.headers);
  Songs_Model.find({}, function(err, docs) {
    if (err) return err;
    res.send(docs); //send all songs in response
  });
};

const getSongsById = function(req, res) {
  const params = req.params;
  const song_id = params.songId;
  Songs_Model.find({ _id: song_id }, function(err, docs) {
    if (err) return err;
    res.send(docs[0]);
  });
};

const insertSong = function(req, res) {
  const songDetails = req.body;
  let msg = new Songs_Model({
    movie_name: songDetails.movie_name,
    song_name: songDetails.song_name,
    movie_year: songDetails.movie_year,
    price: songDetails.price,
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

const updateSong = function(req, res) {
  const song_id = req.params.songId;
  const songs = req.body;
  const searchQuery = {
    _id: song_id
  };
  const updateSong = {
    movie_name: songs.movie_name,
    song_name: songs.song_name,
    movie_year: songs.movie_year,
    price: songs.price
  };
  Songs_Model.findOneAndUpdate(searchQuery, updateSong, {
    new: true
  })
    .then(docs => {
      res.send(docs);
    })
    .catch(err => {
      res.send(err);
    });
};
const deleteSong = function(req, res) {
  const song_id = req.params.songId;
  Songs_Model.findOneAndRemove({
    _id: song_id
  })
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.send(err);
    });
};
module.exports.getAllSongs = getAllSongs;
module.exports.getSongsById = getSongsById;
module.exports.insertSong = insertSong;
module.exports.updateSong = updateSong;
module.exports.deleteSong = deleteSong;
