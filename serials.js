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

const insertSerial = function(req, res) {
  const serialDetails = req.body;
  let msg = new SerialModel({
    name: serialDetails.name,
    director: serialDetails.director,
    price: serialDetails.price,
    time: Date.now()
  });
  msg
    .save()
    .then(doc => {
      res.send(doc);
    })
    .catch(err => {
      res.send(err);
    });
};
module.exports.serials_resolver = serials_resolver;
module.exports.getSerialById = getSerialById;
module.exports.insertSerial = insertSerial;
