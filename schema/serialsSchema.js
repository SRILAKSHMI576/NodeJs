const mongoose = require("mongoose");

const serialSchema = new mongoose.Schema({
  name: String,
  director: String,
  price: Number
});

const SerialModel = mongoose.model("Serial", serialSchema);

exports.SerialModel = SerialModel;
