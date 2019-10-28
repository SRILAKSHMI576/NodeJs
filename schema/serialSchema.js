const mongoose = require("mongoose");

const serialSchema = new mongoosee.Schema({
  name: String,
  director: String,
  price: Number,
  time: Number,
  updatedAt: Number
});

const SerialModel = mongoose.model("Serial", serialSchema);

exports.SerialModel = SerialModel;
