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
module.exports.getAllSongs = getAllSongs;
module.exports.getSongsById = getSongsById;
module.exports.insertSong = insertSong;
