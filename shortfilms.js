const { shortfilmsModel } = require("./schema/shortfilms_Schema");

const shortfilms_Resolver = function(req, res) {
  const searchQuery = {};
  shortfilmsModel.find(searchQuery, function(err, docs) {
    if (err) return err;
    res.send(docs);
  });
};

module.exports.shortfilms_Resolver = shortfilms_Resolver;
