const { Shortfilms_Model } = require("./schema/shortfilmsSchema");

const shortfilms_resolver = function(req, res) {
  Shortfilms_Model.find({}, function(err, docs) {
    if (err) return err;
    res.send(docs[0]);
  });
};

module.exports.shortfilms_resolver = shortfilms_resolver;
