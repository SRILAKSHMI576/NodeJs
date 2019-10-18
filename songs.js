const { Songs_Model } = require("./schema/songsSchema");

const songs_resolver = function(req, res) {
  Songs_Model.find({}, function(err, docs) {
    if (err) return err;
    res.send(docs);
  });
};

const getSongsResolver = function(req, res) {
  const params = req.params;
  const songId = params.songId;
  Songs_Model.find({ _id: songId }, function(err, docs) {
    if (err) return err;
    res.send(docs);
  });
};
module.exports.songs_resolver = songs_resolver;
module.exports.getSongsResolver = getSongsResolver;
