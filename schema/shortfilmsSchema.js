const mongoose = require("mongoose");

const Shortfilms_Schema = new mongoose.Schema({
  name: String,
  director: String,
  price: Number
});

const Shortfilms_Model = mongoose.model("shortfilms", Shortfilms_Schema);

exports.Shortfilms_Model = Shortfilms_Model;
