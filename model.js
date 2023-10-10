const mongoose = require("mongoose");

const userModel = mongoose.Schema({
  name: { type: String },
  age: { type: Number },
  phone: { type: Number },
  address: { type: String },
});

module.exports = mongoose.model("userModel", userModel);
