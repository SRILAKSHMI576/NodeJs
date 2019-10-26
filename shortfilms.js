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

const insertShortfilm = function(req, res) {
  const shortfilm = req.body;
  let msg = new shortfilmsModel({
    name: shortfilm.name,
    director: shortfilm.director,
    price: shortfilm.price,
    time: Date.now()
  });
  msg
    .save()
    .then(doc => {
      res.status(201);
      res.send(doc);
    })
    .catch(err => {
      res.send(err);
    });
};

const updateShortfilm = function(req, res) {
  const shortfilmId = req.params.shortfilmId;
  const shortfilm = req.body;
  const searchQuery = {
    _id: shortfilmId // search query
  };
  const updateShortfilm = {
    name: shortfilm.name,
    director: shortfilm.director,
    price: shortfilm.price,
    updatedAt: Date.now()
    // field:values to update
  };
  shortfilmsModel
    .findOneAndUpdate(searchQuery, updateShortfilm, {
      new: true // return updated doc
    })
    .then(doc => {
      res.send(doc);
    })
    .catch(err => {
      res.send(err);
    });
};

const deleteShortfilm = function(req, res) {
  const shortfilm_id = req.params.shortfilmId;
  shortfilmsModel
    .findByIdAndRemove({
      _id: shortfilm_id
    })
    .then(docs => {
      res.status(204);
      res.send(docs);
    })
    .catch(err => {
      res.send(err);
    });
};
module.exports.shortfilms_Resolver = shortfilms_Resolver;
module.exports.getShortfilmById = getShortfilmById;
module.exports.insertShortfilm = insertShortfilm;
module.exports.insertShortfilm = insertShortfilm;
module.exports.updateShortfilm = updateShortfilm;
module.exports.deleteShortfilm = deleteShortfilm;
