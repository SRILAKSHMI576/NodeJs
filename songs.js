const { Song_Model } = require("./schema/songsSchema");

const songs_resolver = function(req, res) {
  Song_Model.find({}, function(err, docs) {
    if (err) return err;
    res.send(docs);
  });
};
module.exports.songs_resolver = songs_resolver;
