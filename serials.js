const { SerialModel } = require("./schema/serialSchema");

const serials_resolver = function(req, res) {
  SerialModel.find({}, function(err, docs) {
    if (err) return err;
    res.send(docs);
  });
};

const getSerialById = function(req, res) {
  const params = req.params;
  const serial_id = params.serialId;
  SerialModel.find({ _id: serial_id }, function(err, docs) {
    if (err) return err;
    res.send(docs[0]);
  });
};
module.exports.serials_resolver = serials_resolver;
module.exports.getSerialById = getSerialById;
