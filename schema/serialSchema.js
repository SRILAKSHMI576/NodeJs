const mongoose = require("mongoose");

const serialSchema = new mongoose.Schema({
  name: String,
  director: String,
  price: Number,
  time: Number,
  updatedAt: Number
});

const serialModel = mongoose.model("Serial", serialSchema);

exports.serialModel = serialModel;
