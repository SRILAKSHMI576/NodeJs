const mongoose = require("mongoose");

const shortfilms_Schema = new mongoose.Schema({
  name: String,
  director: String,
  price: Number
});

const shortfilmsModel = mongoose.model("shortfilms", shortfilms_Schema);

exports.shortfilmsModel = shortfilmsModel;
