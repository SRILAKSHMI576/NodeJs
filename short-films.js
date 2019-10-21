const { Shortfilms_Model } = require("./schema/shortfilmsSchema");

const shortfilms_resolver = function(req, res) {
  Shortfilms_Model.find({}, function(err, docs) {
    if (err) return err;
    res.send(docs);
  });
};

const getShortfilmById = function(req, res) {
  const shortfilm_id = req.params.shortfilmId;
  Shortfilms_Model.find({ _id: shortfilm_id }, function(err, docs) {
    if (err) return err;
    res.send(docs[0]);
  });
};
module.exports.shortfilms_resolver = shortfilms_resolver;
module.exports.getShortfilmById = getShortfilmById;
