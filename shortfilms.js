const { shortfilmsModel } = require("./schema/shortfilms_Schema");

const shortfilms_Resolver = function(req, res) {
  const searchQuery = {};
  shortfilmsModel.find(searchQuery, function(err, docs) {
    if (err) return err;
    res.send(docs);
  });
};

const getShortfilmById = function(req, res) {
  const shortfilm_id = req.params.shortfilmId;
  const searchQuery = { _id: shortfilm_id };
  shortfilmsModel.find(searchQuery, function(err, docs) {
    if (err) return err;
    res.send(docs);
  });
};
module.exports.shortfilms_Resolver = shortfilms_Resolver;
module.exports.getShortfilmById = getShortfilmById;
