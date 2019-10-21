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
module.exports.getAllSongs = getAllSongs;
module.exports.getSongsById = getSongsById;
