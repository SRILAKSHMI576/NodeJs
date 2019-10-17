const { SerialModel } = require("./schema/serialsSchema");

const serials_resolver = function(req, res) {
  SerialModel.find({}, function(err, docs) {
    if (err) return err;
    res.send(docs);
  });
};
module.exports.serials_resolver = serials_resolver;
