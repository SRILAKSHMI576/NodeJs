const { SerialModel } = require("./schema/serialSchema");

const serial_resolver = function(req, res) {
  const searchQuery = {};
  SerialModel.find(searchQuery, function(err, docs) {
    if (err) return err;
    res.send(docs);
  });
};

const getSerialById = function(req, res) {
  const serial_id = req.params.seralId;
  const searchQuery = { _id: serial_id };
  SerialModel.find(searchQuery, function(err, docs) {
    if (err) return err;
    res.send(docs);
  });
};
module.exports.serial_resolver = serial_resolver;
module.exports.getSerialById = getSerialById;
