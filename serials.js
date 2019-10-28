const { SerialModel } = require("./schema/serialSchema");

const serial_resolver = function(req, res) {
  const searchQuery = {};
  SerialModel.find(searchQuery, function(err, docs) {
    if (err) return err;
    res.send(docs);
  });
};

const getSerialById = function(req, res) {
  const serial_id = req.params.serialId;
  const searchQuery = { _id: serial_id };
  SerialModel.find(searchQuery, function(err, docs) {
    if (err) return err;
    res.send(docs);
  });
};

const insertSerial = function(req, res) {
  const serial = req.body;
  let msg = new SerialModel({
    name: serial.name,
    director: serial.director,
    price: serial.price,
    time: Date.now()
  });
  msg
    .save()
    .then(docs => {
      res.status(201);
      res.send(docs);
    })
    .then(err => {
      res.send(err);
    });
};

const updateSerial = function(req, res) {
  const serial_id = req.params.serialId;
  const serial = req.body;
  const searchQuery = { _id: serial_id };
  const updateSerial = {
    name: serial.name,
    director: serial.director,
    price: serial.price,
    updatedAt: Date.now()
  };
  SerialModel.findOneAndUpdate(searchQuery, updateSerial, {
    new: true
  })
    .then(docs => {
      res.send(docs);
    })
    .catch(err => {
      res.send(err);
    });
};

const deleteSerial = function(req, res) {
  const serial_id = req.params.serialId;
  SerialModel.findOneAndRemove({
    _id: serial_id
  })
    .then(docs => {
      res.status(204);
      res.send(docs);
    })
    .catch(err => {
      res.send(err);
    });
};

module.exports.serial_resolver = serial_resolver;
module.exports.getSerialById = getSerialById;
module.exports.insertSerial = insertSerial;
module.exports.updateSerial = updateSerial;
module.exports.deleteSerial = deleteSerial;
