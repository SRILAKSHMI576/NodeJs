const { serialModel } = require("./schema/serialSchema");

const serial_resolver = function(req, res) {
  const searchQuery = {};
  serialModel.find(searchQuery, function(err, docs) {
    if (err) return err;
    res.send(docs);
  });
};

module.exports.serial_resolver = serial_resolver;
